import express from "express";
import {
  createPlatform,
  getPlatformById,
  getPlatforms,
} from "../controllers/platformController.js";

const router = express.Router();

router.get("/", getPlatforms);
router.get("/:id", getPlatformById)
router.post("/", createPlatform);
export default router;
