import { v4 as uuid } from "uuid";

import playlist from "./json/playlist.json" assert { type: "json" };

export const getSongPlayByIdRepo = (id) => {
  const song = playlist.filter((song) => song.id === id);

  return song;
};

export const addSongRepo = (title, artists, url) => {
  if (!title || title.trim() === "") {
    throw Error("title is not valid");
  }

  const newSong = {
    id: uuid(),
    title,
    artists,
    url,
  };

  playlist.push(newSong);

  return playlist;
};

export const getAllSongsRepo = () => {
  return playlist;
};
