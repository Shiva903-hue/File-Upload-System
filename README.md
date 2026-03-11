# Cloudinary File Upload System

This project demonstrates a simple **file upload system using Cloudinary** with **Node.js, Express, and React**.

Instead of storing images directly in a database, files are uploaded to **Cloudinary**, and the returned **image URL** is used to display the uploaded file in the application.

---

## Features

* Upload images from the frontend
* Send files to the backend using `FormData`
* Upload images to Cloudinary
* Retrieve and display the uploaded image URL
* Lightweight and beginner-friendly implementation

---

## Tech Stack

* React
* Node.js
* Express.js
* Cloudinary
* Multer

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Shiva903-hue/File-Upload-System
cd File-Upload-System
```

---

### 2. Install backend dependencies

```bash
npm install cloudinary multer express
```

---

### 3. Configure Cloudinary

Create a configuration file and add your Cloudinary credentials:

```javascript
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "YOUR_CLOUD_NAME",
  api_key: "YOUR_API_KEY",
  api_secret: "YOUR_API_SECRET"
});
```

You can get these credentials from the **Cloudinary Dashboard** after signing up.

---

## How It Works

1. User selects an image on the frontend.
2. The image is sent to the backend using `FormData`.
3. The backend uploads the file to Cloudinary.
4. Cloudinary returns a **secure image URL**.
5. The frontend displays the uploaded image using this URL.

---

## Project Structure

```
project
│
├── backend
│   ├── server.js
│   └── cloudinaryConfig.js
│
├── frontend
│   ├── App.jsx
│   └── components
│
└── README.md
```

---

## Why Use Cloudinary?

Storing images directly in a database like MongoDB can lead to:

* Large database size
* Slower queries
* Higher server load

Cloudinary provides:

* Media storage
* Image optimization
* CDN delivery
* Image transformations

---

## License

This project is for learning purposes.
