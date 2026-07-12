import "dotenv/config";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";

import Platform from "../models/Platform.js";
import Game from "../models/Game.js";
import Review from "../models/Review.js";
import Achievement from "../models/Achievement.js";

const seedDatabase = async () => {
  try {
    await connectDB();
    await Achievement.deleteMany();
    await Review.deleteMany();
    await Game.deleteMany();
    await Platform.deleteMany();

    const platforms = await Platform.insertMany([
      {
        name: "PC",
        manufacturer: "Various",
        releaseYear: 1981,
      },
      {
        name: "PlayStation 5",
        manufacturer: "Sony",
        releaseYear: 2020,
      },
      {
        name: "Xbox Series X",
        manufacturer: "Microsoft",
        releaseYear: 2020,
      },
      {
        name: "Nintendo Switch",
        manufacturer: "Nintendo",
        releaseYear: 2017,
      },
      {
        name: "Steam Deck",
        manufacturer: "Valve",
        releaseYear: 2022,
      },
    ]);
    console.log(`${platforms.length} platforms created`);

    const games = await Game.insertMany([
      {
        title: "Elden Ring",
        genre: "RPG",
        releaseYear: 2022,
        developer: "FromSoftware",
        platform: platforms[1]._id,
        hoursPlayed: 120,
        completed: true,
        rating: 9,
        description: "Open world action RPG",
      },
      {
        title: "Cyberpunk 2077",
        genre: "RPG",
        releaseYear: 2020,
        developer: "CD Projekt Red",
        platform: platforms[0]._id,
        hoursPlayed: 80,
        completed: true,
        rating: 8,
        description: "Futuristic open world RPG",
      },
      {
        title: "Minecraft",
        genre: "Sandbox",
        releaseYear: 2011,
        developer: "Mojang",
        platform: platforms[0]._id,
        hoursPlayed: 300,
        completed: false,
        rating: 10,
        description: "Creative sandbox game",
      },
      {
        title: "Hades",
        genre: "Roguelike",
        releaseYear: 2020,
        developer: "Supergiant Games",
        platform: platforms[4]._id,
        hoursPlayed: 60,
        completed: true,
        rating: 9,
        description: "Dungeon crawler roguelike",
      },
      {
        title: "The Legend of Zelda: Tears of the Kingdom",
        genre: "Adventure",
        releaseYear: 2023,
        developer: "Nintendo",
        platform: platforms[3]._id,
        hoursPlayed: 150,
        completed: true,
        rating: 10,
        description: "Open world adventure game",
      },
      {
        title: "Red Dead Redemption 2",
        genre: "Adventure",
        releaseYear: 2018,
        developer: "Rockstar Games",
        platform: platforms[0]._id,
        hoursPlayed: 200,
        completed: true,
        rating: 10,
        description: "Open world western adventure game",
      },
      {
        title: "Shadow of the Colossus",
        genre: "Action",
        releaseYear: 2018,
        developer: "Bluepoint Games",
        platform: platforms[1]._id,
        hoursPlayed: 25,
        completed: true,
        rating: 10,
        description: "Defeat giant colossi in a mysterious world",
      },
      {
        title: "Okami HD",
        genre: "Adventure",
        releaseYear: 2017,
        developer: "Capcom",
        platform: platforms[0]._id,
        hoursPlayed: 40,
        completed: true,
        rating: 9,
        description:
          "Mythological action adventure inspired by Japanese folklore",
      },
      {
        title: "The Witcher 3: Wild Hunt",
        genre: "RPG",
        releaseYear: 2015,
        developer: "CD Projekt Red",
        platform: platforms[0]._id,
        hoursPlayed: 180,
        completed: true,
        rating: 10,
        description: "Story-driven fantasy RPG",
      },
      {
        title: "Hollow Knight",
        genre: "Metroidvania",
        releaseYear: 2017,
        developer: "Team Cherry",
        platform: platforms[4]._id,
        hoursPlayed: 70,
        completed: true,
        rating: 10,
        description: "Challenging metroidvania set in Hallownest",
      },
    ]);
    console.log(`${games.length} games created`);

    const reviews = await Review.insertMany([
      {
        game: games[0]._id,
        username: "Jacky",
        rating: 9,
        comment: "Amazing exploration and combat.",
      },
      {
        game: games[0]._id,
        username: "Aurya",
        rating: 10,
        comment: "One of the best RPGs ever made.",
      },
      {
        game: games[1]._id,
        username: "Abena",
        rating: 8,
        comment: "Great story after updates.",
      },
      {
        game: games[2]._id,
        username: "Brian",
        rating: 10,
        comment: "Unlimited creativity.",
      },
      {
        game: games[3]._id,
        username: "Cherry",
        rating: 9,
        comment: "Fantastic gameplay loop.",
      },
      {
        game: games[4]._id,
        username: "Claudena",
        rating: 10,
        comment: "Nintendo at its best.",
      },
      {
        game: games[5]._id,
        username: "Fredy",
        rating: 10,
        comment: "One of the greatest stories in gaming.",
      },
      {
        game: games[5]._id,
        username: "Isaias",
        rating: 9,
        comment: "Amazing world and characters.",
      },
      {
        game: games[6]._id,
        username: "Kevin",
        rating: 10,
        comment: "A masterpiece of minimalist storytelling.",
      },
      {
        game: games[6]._id,
        username: "Henny",
        rating: 9,
        comment: "Every colossus felt like a unique puzzle.",
      },
      {
        game: games[7]._id,
        username: "Pavel",
        rating: 9,
        comment: "Beautiful art style and memorable soundtrack.",
      },
      {
        game: games[7]._id,
        username: "Richard",
        rating: 10,
        comment: "A timeless classic that still holds up.",
      },
      {
        game: games[8]._id,
        username: "Amanda",
        rating: 10,
        comment: "Fantastic writing and side quests.",
      },
      {
        game: games[8]._id,
        username: "Sky",
        rating: 10,
        comment: "Geralt's journey was unforgettable.",
      },
      {
        game: games[9]._id,
        username: "Kat",
        rating: 10,
        comment: "Tough but incredibly rewarding.",
      },
      {
        game: games[9]._id,
        username: "Jeremy",
        rating: 9,
        comment: "The exploration and atmosphere are incredible.",
      },
    ]);
    console.log(`${reviews.length} reviews created`);

    const achievements = await Achievement.insertMany([
      {
        game: games[0]._id,
        name: "Elden Lord",
        description: "Complete the main story",
        difficulty: "Legendary",
      },
      {
        game: games[0]._id,
        name: "Dragon Slayer",
        description: "Defeat a dragon",
        difficulty: "Hard",
      },
      {
        game: games[1]._id,
        name: "Night City Legend",
        description: "Reach max street cred",
        difficulty: "Hard",
      },
      {
        game: games[2]._id,
        name: "Master Builder",
        description: "Build a massive structure",
        difficulty: "Medium",
      },
      {
        game: games[2]._id,
        name: "The End?",
        description: "Defeat the Ender Dragon",
        difficulty: "Hard",
      },
      {
        game: games[3]._id,
        name: "Escape Artist",
        description: "Beat Hades for the first time",
        difficulty: "Medium",
      },
      {
        game: games[4]._id,
        name: "Hero of Hyrule",
        description: "Complete the main quest",
        difficulty: "Legendary",
      },
      {
        game: games[5]._id,
        name: "Outlaw Legend",
        description: "Complete the main story",
        difficulty: "Legendary",
      },
      {
        game: games[5]._id,
        name: "Master Hunter",
        description: "Hunt every legendary animal",
        difficulty: "Hard",
      },
      {
        game: games[6]._id,
        name: "Colossus Slayer",
        description: "Defeat all colossi",
        difficulty: "Legendary",
      },
      {
        game: games[6]._id,
        name: "Wanderer",
        description: "Reach the forbidden land",
        difficulty: "Easy",
      },
      {
        game: games[7]._id,
        name: "Celestial Brush Master",
        description: "Learn every brush technique",
        difficulty: "Hard",
      },
      {
        game: games[7]._id,
        name: "Restorer of Nippon",
        description: "Complete the story",
        difficulty: "Legendary",
      },
      {
        game: games[8]._id,
        name: "Butcher of Blaviken",
        description: "Defeat 100 enemies",
        difficulty: "Medium",
      },
      {
        game: games[8]._id,
        name: "Gwent Champion",
        description: "Win 50 Gwent matches",
        difficulty: "Hard",
      },
      {
        game: games[9]._id,
        name: "Dream No More",
        description: "Unlock the true ending",
        difficulty: "Legendary",
      },
      {
        game: games[9]._id,
        name: "Cartographer",
        description: "Discover every area",
        difficulty: "Medium",
      },
    ]);
    console.log(`${achievements.length} achievements created`);

    console.log("Database seeded successfully");

    await mongoose.connection.close();
    console.log("Database connection closed");
  } catch (error) {
    console.error(error.message);
  }
};

seedDatabase();
