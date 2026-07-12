import express from "express";
import {
  createGame,
  deleteGame,
  getGameById,
  getGames,
  getStatistics,
  updateGame,
} from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGames);
router.get("/statistics", getStatistics);
router.get("/:id", getGameById);
router.post("/", createGame);
router.patch("/:id", updateGame);
router.delete("/:id", deleteGame);

export default router;
