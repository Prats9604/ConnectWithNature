import express from "express";
import User, { IUser } from "../models/User";

const router= express.Router();

//Get All Users
router.get('/', async (req, res) => {
    try {
        const users: IUser[] = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'server error' });
    }
});
export default router;