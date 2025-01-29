const express = require('express');
const cors = require('cors');
const youtubedl = require('youtube-dl-exec');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint for downloading video
app.post('/download', async (req, res) => {
    const { videoUrl } = req.body;

    if (!videoUrl) {
        return res.status(400).json({ error: 'Video URL is required' });
    }

    try {
        const outputFilePath = path.join(__dirname, 'downloads', `${Date.now()}.mp4`);

        await youtubedl(videoUrl, {
            output: outputFilePath,
            format: 'mp4',
        });