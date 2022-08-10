import { createError } from "../error.js";
import User from "../models/User.js";

export const update = async (req, res, next) => {
    if (req.params.id === req.user.id){
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser)
        } catch (err) {
            next(err)
        }
    } else {
        return next(createError(403, "Can only modify your account"))
    }
};

export const deleteUser = async (req, res, next) => {
    if (req.params.id === req.user.id){
        try {
            await User.findByIdAndDelete(req.params.id, 
            );
            res.status(200).json("User has been deleted");
        } catch (err) {
            next(err);
        }
    } else {
        return next(createError(403, "Can only delete your own account"))
    }
};

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(rew.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const subscribe = async (req, res, next) => {
    try {
        await User.findById(req.user.id, {
            $push: { subscribedUsers: req.params.id }
        });
        await User.findByIdAndUpdate(req.params.id, {
            $inc: { subscribers: 1 }
        });
        res.status(200).json("Successfully subscribed");
    } catch (err) {
        next(err);
    }
};

export const unsubscribe = async (req, res, next) => {
    try {
        try {
            await User.findById(req.user.id, {
                $pull: { subscribedUsers: req.params.id }
            });
            await User.findByIdAndUpdate(req.params.id, {
                $inc: { subscribers: -1 }
            });
            res.status(200).json("Successfully unsubscribed");
        } catch (err) {
            next(err);
        }
    } catch (err) {
        next(err);
    }
};

export const like = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err);
    }
};

export const dislike = async (req, res, next) => {
    try {
        
    } catch (err) {
        next(err);
    }
};
