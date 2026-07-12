import express from "express";
import {
  createGame,
  deleteGame,
  getGameById,
  getGames,
  updateGame,
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGames);
router.get("/:id", getGameById);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

export default router;
