import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from DALL.E ROUTES" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'b64_json'
        });

        if (!response || !response.data || response.data.length === 0) {
            return res.status(500).json({ message: "Failed to generate image" });
        }

        const image = response.data[0].b64_json;  // Ensure correct access

        res.status(200).json({ photo: image });
    } catch (error) {
        console.error("DALL·E API Error:", error);
        res.status(500).json({ message: "Something went wrong with AI image generation" });
    }
});

export default router;
