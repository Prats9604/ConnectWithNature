// src/routes/posts.ts
import express from 'express';
import Destination from '../models/Post';

const router = express.Router();

// Create a new destination post
router.post('/add', async (req, res) => {
  const { name, description } = req.body;
  const contributor = 'testUser'; 

  try {
    const newDestination = new Destination({ name, description, contributor });
    await newDestination.save();
    res.status(201).json({ message: 'Post created successfully' });
  } catch (err) {
    console.error(err);  // Log the error
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all destination posts
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;