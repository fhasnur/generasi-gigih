import express from "express";

import {
  addSong,
  getAllSongs,
  getIndex,
  getSongPlay,
} from "./controllers/rest/playlist.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", getIndex);

app.get("/playlist/:id/play", getSongPlay);

app.post("/playlist", addSong);

app.get("/playlist", getAllSongs);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
