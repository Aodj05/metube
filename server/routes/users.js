import express from 'express';
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

//Update user
router.put("/:id", verifyToken, update);

//Delete user
router.delete("/:id", deleteUser);

//Get user
router.get("/find/:id", getUser);

//Subscribe user
router.put("/sub/:id", subscribe);

//Unsubscribe user
router.put("/unsub/:id", unsubscribe);

//Like a video
router.put("/like/:videoId", like);

//Dislike a video
router.put("/dislike/:videoId", dislike);

export default router;