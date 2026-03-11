// Import required dependencies
import express from "express";
import multer from "multer"; 
import cors from "cors";
import dotenv from "dotenv"; 
dotenv.config();
import { v2 as cloudinary } from "cloudinary"; 

const app = express();


app.use(cors());

// Store uploaded files temporarily in the "uploads/" folder before sending to Cloudinary
const upload = multer({ dest: "uploads/" });

// Configure Cloudinary using credentials stored in .env
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

// POST /upload — receives a single file, uploads it to Cloudinary, returns the image URL
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // Upload the locally saved file to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Respond with the secure Cloudinary-hosted URL
    res.json({
      imageUrl: result.secure_url
    });

  } catch (error) {

    res.status(500).json({ error: "Upload failed" });
  }
});


app.listen(5000, () => {
  console.log("Server running on port 5000");
});

