import {
  addSongRepo,
  getAllSongsRepo,
  getSongPlayByIdRepo,
} from "../../repositories/playlist/playlist.js";

export const getSongPlayByIdUsecase = (id) => {
  const song = getSongPlayByIdRepo(id);

  if (!song) {
    return null;
  }

  return song;
};

export const addSongUsecase = (title, artists, url) => {
  return addSongRepo(title, artists, url);
};

export const getAllSongsUsecase = () => {
  const playlist = getAllSongsRepo();

  if (!playlist) {
    return null;
  }

  return playlist;
};
