import express from "express";
import { getPlatforms } from "../controllers/platformController.js";

const router = express.Router();

router.get("/", getPlatforms);
export default router; 