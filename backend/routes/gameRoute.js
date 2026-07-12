import express from "express";
import { createGame, getGames } from "../controllers/gameController.js";

const router = express.Router();

router.get("/", getGames);
router.post("/", createGame)

export default router;