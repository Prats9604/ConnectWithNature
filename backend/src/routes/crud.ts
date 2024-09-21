import express from "express";
import User from "../models/User";

const router=express.Router();


// retrieve all users from the database
router.get('/users', async(req, res)=>{
    try {
       const users = await User.find();
       res.status(200).json(users); 
    } catch (error) {
        res.status(500).json({error:'server error'});
    }
})


//Create new user
router.post('/users', async (req, res)=>{
    try {
        const {name, email, password} = req.body;
        const newUser = new User({name, email, password});
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({error:'Bad req'});
    }
})



export default router;
