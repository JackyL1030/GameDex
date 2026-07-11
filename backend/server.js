import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";

import platformRoutes from "./routes/platformRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to GameDex API");
});

app.use("/api/platforms", platformRoutes);

app.get("/about", (req, res) => {
  res.send("GameDex is a video game collection API");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running on port ${PORT}`);
});
