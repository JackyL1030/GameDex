import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema(
    {
        game: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Game",
            required:true
        },
        name:{
            type:String,
            required: true,
            trim: true
        },
        description:{
            type:String,
            trim: true,
        },
        difficulty:{
            type:String,
            enum: ["Easy", "Medium", "Hard", "Legendary"]
        },
        unlocked:{
            type:Boolean,
            default:false,
        }
    },
    {
        timestamps: true
    }
);

const Achievement = mongoose.model("Achievement", achievementSchema);
export default Achievement;