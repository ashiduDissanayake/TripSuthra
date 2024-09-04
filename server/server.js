const express = require('express');
const {
  GoogleGenerativeAI,
} = require("@google/generative-ai");

const apiKey = process.env.VITE_REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const app = express();

app.use(express.json());

app.post('/generate-itinerary', async (req, res) => {
  const { startLocation, endLocation, days, travelers, budget, description } = req.body;
  const parts = [
    { text: `input: Start Location` },
    { text: `input 2: ${startLocation}` },
    { text: `input: Destination` },
    { text: `input 2: ${endLocation}` },
    { text: `input 3: ${days}` },
    { text: `input 4: ${travelers}` },
    { text: `input 5: ${budget}` },
    { text: `input 6: ${description}` },
    { text: `output: Activities for Day 1.` },
  ];

  try {
    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    res.json({ itinerary: result.response.text() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate itinerary.' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
