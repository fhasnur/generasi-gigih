import express from "express";

import {
  addSong,
  getAllSongs,
  getSongPlay,
  getMostPlayedSongs,
} from "../controllers/rest/playlist.js";

const router = express.Router();

router.get("/", getAllSongs);

router.get("/:id/play", getSongPlay);

router.get("/most-played", getMostPlayedSongs);

router.post("/", addSong);

export default router;
