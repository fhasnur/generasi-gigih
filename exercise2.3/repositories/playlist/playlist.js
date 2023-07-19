import { v4 as uuid } from "uuid";

import playlist from "./json/playlist.json" assert { type: "json" };

const songPlayCount = {};

export const getSongPlayByIdRepo = (id) => {
  const song = playlist.find((song) => String(song.id) === id);

  return song;
};

export const incrementSongPlayCountRepo = (id) => {
  if (!songPlayCount[id]) {
    songPlayCount[id] = 0;
  }

  songPlayCount[id]++;
};

export const getMostPlayedSongsRepo = () => {
  const songsWithCount = playlist.map((song) => ({
    ...song,
    count: songPlayCount[song.id] || 0,
  }));

  return songsWithCount.sort((a, b) => b.count - a.count);
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
