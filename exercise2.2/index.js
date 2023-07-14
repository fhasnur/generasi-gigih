import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Spotify!",
  });
});

app.post("/playlist", (req, res) => {
  const newPlaylist = req.body;

  const readPlaylist = fs.readFileSync("playlist.json", "utf-8");
  const playlist = JSON.parse(readPlaylist);

  const song = {
    id: playlist.length + 1,
    ...newPlaylist
  };

  fs.readFile("playlist.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }

    let playlist = JSON.parse(data);

    playlist.push(song);

    fs.writeFile("playlist.json", JSON.stringify(playlist), (err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send("Song added successfully!");
      }
    });
  });
});

app.get("/playlist/:id/play", (req, res) => {
  const { id } = req.params;

  const readPlaylist = fs.readFileSync("playlist.json", "utf-8");
  const playlist = JSON.parse(readPlaylist);

  const song = playlist.filter((song) => song.id === Number(id));

  if (song.length === 0) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({
    data: song,
  });
});

app.get("/playlist", (req, res) => {
  const readPlaylist = fs.readFileSync("playlist.json", "utf-8");
  const playlist = JSON.parse(readPlaylist);

  res.send(playlist);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});