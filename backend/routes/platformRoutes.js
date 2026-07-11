import express from "express";
import {
  createPlatform,
  getPlatforms,
} from "../controllers/platformController.js";

const router = express.Router();

router.get("/", getPlatforms);
router.post("/", createPlatform);
export default router;
