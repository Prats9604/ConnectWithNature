const express = require('express');
const router = express.Router();
const { storage } = require("../utils/cloudinary");
const multer = require("multer");
const upload = multer({storage});
import Destination from '../models/Destination';

router.post("/users/", upload.single("image"), async (req : any, res : any) => {
  try {
  const result = req.file.path ;
  const { name, description } = req.body; 
  console.log("result==",result);
  console.log("name==",name);
  console.log("description==",description);
  const newPost = new Destination({
    name,
    description,
    src: result,
    contributor : 'Dfghjk'
  });  
  const savedPost = await newPost.save();
  res.json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;
