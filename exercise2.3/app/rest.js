import express from "express";

import usersRouter from "../routes/playlist.js";

export function startRest() {
  const app = express();
  const port = 3000;

  app.use(express.json());

  app.use("/playlist", usersRouter);

  app.use((req, res) => {
    res.status(404).json({
      message: "not found!",
    });
  });

  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}
