import {
  addSongUsecase,
  getAllSongsUsecase,
  getSongPlayByIdUsecase,
  incrementSongPlayCountUsecase,
  getMostPlayedSongsUsecase,
} from "../../usecases/playlist/playlist.js";

export const getSongPlay = (req, res) => {
  const { id } = req.params;

  incrementSongPlayCountUsecase(id);

  const song = getSongPlayByIdUsecase(id);

  if (!song) {
    return res.status(404).json({
      message: "Song not found!",
    });
  }

  res.json({
    data: song,
  });
};

export const getMostPlayedSongs = (req, res) => {
  const mostPlayedSongs = getMostPlayedSongsUsecase();

  res.json({
    data: mostPlayedSongs,
  });
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
