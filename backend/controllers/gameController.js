import Game from "../models/Game.js";
import Platform from "../models/Platform.js";

export const getGames = async (req, res) => {
  try {
    const filter = {};
    if (req.query.genre) {
      filter.genre = req.query.genre;
    }
    if (req.query.completed) {
      filter.completed = req.query.completed;
    }
    let query = Game.find().populate("platform");
    if (req.query.sort === "rating") {
      query = query.sort({ rating: -1 });
    }
    const games = await query;
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createGame = async (req, res) => {
  try {
    const platform = await Platform.findById(req.body.platform);
    if (!platform) {
      return res.status(404).json({ message: "Platform not found" });
    }
    const game = await Game.create(req.body);
    res.status(201).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.status(200).json({ message: "Game deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getStatistics = async (req, res) => {
  try {
    const statistics = await Game.aggregate([
      {
        $group: {
          _id: null,
          totalGames: {
            $count: {},
          },
          averageRating: {
            $avg: "$rating",
          },
          totalHoursPlayed: {
            $sum: "$hoursPlayed",
          },
        },
      },
    ]);
    res.status(200).json(statistics);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
