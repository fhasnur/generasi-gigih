import {
  addSongUsecase,
  getAllSongsUsecase,
  getSongPlayByIdUsecase,
} from "../../usecases/playlist/playlist.js";

export const getIndex = (req, res) => {
  res.json({
    message: "Welcome to Spotify!",
  });
};

export const getSongPlay = (req, res) => {
  const { id } = req.params;

  try {
    const song = getSongPlayByIdUsecase(id);

    if (!song) {
      return res.status(404).json({
        message: "Song not found!",
      });
    }

    res.json({
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const addSong = (req, res) => {
  try {
    const { title, artists, url } = req.body;

    const song = addSongUsecase(title, artists, url);

    if (!song) {
      return res.status(404).json({
        message: "Song not found!",
      });
    }

    res.json({
      data: song,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllSongs = (req, res) => {
  const playlist = getAllSongsUsecase();

  res.json({
    data: playlist,
  });
};
