const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3000;

// Serve static files from Public
app.use(express.static(path.join(dirname, 'Public')));

// Serve images from Uploads folder via /Uploads path
app.use('/Uploads', express.static(path.join(dirname, 'Uploads')));

// API endpoint for listing image files
app.get('/api/images', (req, res) => {
  const imagesDir = path.join(__dirname, 'Uploads');
  fs.readdir(imagesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to load images' });
    }
const imagePaths = files.map(file => `/Uploads/${file}`);
    res.json(imagePaths);
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});