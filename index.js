import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

// Single Hugging Face API key for both models
const HF_API_KEY = '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'; // Your actual API key

app.use(express.json());

// Helper function to query Hugging Face API
async function queryModel(apiKey, modelUrl, data) {
  try {
    const response = await fetch(modelUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('image/')) {
      return response;
    } else {
      const result = await response.text(); // Read response as text
      throw new Error(`Expected image response but received something else: ${result}`);
    }
  } catch (error) {
    console.error('Error querying Hugging Face API:', error.message);
    throw error;
  }
}

// Endpoint to interact with Hugging Face models
app.get('/api/flux', async (req, res) => {
  const { gen, model } = req.query;

  if (!gen || !model) {
    return res.status(400).json({ error: 'Query parameters "gen" and "model" are required' });
  }

  let modelUrl;

  // Choose model URL based on the model parameter
  if (model === '1') {
    modelUrl = 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev';
  } else if (model === '2') {
    modelUrl = 'https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell';
  } else {
    return res.status(400).json({ error: 'Invalid model parameter. Use 1 or 2.' });
  }

  try {
    const response = await queryModel(HF_API_KEY, modelUrl, { inputs: gen });
    res.setHeader('Content-Type', response.headers.get('content-type')); // Set the appropriate content type
    response.body.pipe(res); // Efficiently stream the image data
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});