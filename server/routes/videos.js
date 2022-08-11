import express from 'express';
import { addVideo, addView, deleteVideo, getByTag, getVideo, random, search, sub, trend, updateVideo } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

//Create video
router.post("/", verifyToken, addVideo);

//Update video
router.put("/:id", verifyToken, updateVideo);

//Delete video
router.delete("/:id", verifyToken, deleteVideo);

//Get video
router.get("/find/:id", getVideo);

//Update views
router.put("/view/:id", addView);

//Trend video
router.get("/trend", trend);

//Random video
router.get("/random", random);

//Subscribed channel videos
router.get("/sub", verifyToken, sub);

//Get video by tags
router.get("/tags", getByTag);

//Get video by search
router.get("/search", search);

export default router;