import Game from "../models/Game.js";
import Platform from "../models/Platform.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createGame = async (req,res) => {
    try {
        const platform = await Platform.findById(req.body.platform);
        if(!platform){
            return res.status(404).json({message:"Platform not found"})
        }
        const game = await Game.create(req.body);
        res.status(201).json(game);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const getGameById = async (req,res) => {
    try {
        const game = await Game.findById(req.params.id);
        if(!game){
            return res.status(404).json({message:"Game not found"})
        }
        res.status(200).json(game)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}