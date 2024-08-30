// import React, from 'react';

// import .env, from .env;
// Load the .env file if it exists

import dotenv from './.env'

require("dotenv").config();

const endpoint = process.env.VISION_ENDPOINT; // ||  '<your_endpoint>';
const key = process.env.VISION_KEY; // || '<your_key>';

const credential = new AzureKeyCredential(key);
const client = createClient(endpoint, credential);
const imageUrl = 'https://learn.microsoft.com/azure/ai-services/computer-vision/media/quickstarts/presentation.png';

const features = [
    'Caption',
    'DenseCaptions',
    'Objects',
    'People',
    'Read',
    'SmartCrops',
    'Tags'
];


async function analyzeImage() { 

    // curl.exe -H Ocp-Apim-Subscription-Key: VISION_KEY -H "Content-Type: application/json" VISION_ENDPOINT -d {"url":"https://learn.microsoft.com/azure/cognitive-services/computer-vision/images/windows-kitchen.jpg"}

    const result = await client.path('/imageanalysis:analyze').post({
        body: {
            url: imageUrl
        },
        queryParameters: {
            features: features,
            // language: en,
            'gender-neutral-captions': 'true',
            // smartCrops-aspect-ratios: [0.9, 1.33]
            // VisualFeatures.SmartCrops: [0.5, 2.0]
        },
        contentType: application/json
      });

}

analyzeImage()

// export function analyzeImage() {
//     alert("Analyze");
// }
