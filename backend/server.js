import express from "express";

const app = express();
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Welcome to GameDex API");
});

app.get("/about", (req, res) => {
  res.send("GameDex is a video game collection API");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
