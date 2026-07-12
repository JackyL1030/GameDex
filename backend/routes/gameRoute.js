import express from "express";
import { createGame, getGameById, getGames } from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGames);
router.get("/:id", getGameById)
router.post("/", createGame)

export default router;