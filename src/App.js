import React, { useState } from 'react';
import { analyzeImage } from './azure-image-analysis';

function App() {
  const [input, setInput] = useState('');

  const handleImageAnalysis = () => {
    // Logic for image analysis using the input URL
    console.log("Analyzing image:", input);
  };

  const handleImageGeneration = () => {
    // Logic for image generation using the prompt
    console.log("Generating image with prompt:", input);
  };

  const handleInput = (e) => {
    setInput(e.target.value)
  }

   return(
        <div>
            <h1>Computer Vision</h1>
            <div>
                <h3>Insert URL or type prompt:</h3>
                <form>
                    <input type="url" value={input} onChange={handleInput} placeholder="Enter url to analyze or textual prompt to generate an image" required />
                    <div>
                      <button type="button" onClick={handleImageAnalysis}>Analyze</button>
                      <button type="button" onClick={handleImageGeneration}>Generate</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )

}

<script type="azure-image-analysis.js">
  import { analyzeImage } from "./app.js";
  window.analyzeImageFromModule = analyzeImage;
</script>

function DisplayResult() {
  
  const iaResult = iaResult.body;

  console.log(`Model Version: ${iaResult.modelVersion}`);
  console.log(`Image Metadata: ${JSON.stringify(iaResult.metadata)}`);
  if (iaResult.captionResult) {
    console.log(`Caption: ${iaResult.captionResult.text} (confidence: ${iaResult.captionResult.confidence})`);
  }
  if (iaResult.denseCaptionsResult) {
    iaResult.denseCaptionsResult.values.forEach(denseCaption => console.log(`Dense Caption: ${JSON.stringify(denseCaption)}`));
  }
  if (iaResult.objectsResult) {
    iaResult.objectsResult.values.forEach(object => console.log(`Object: ${JSON.stringify(object)}`));
  }
  if (iaResult.peopleResult) {
    iaResult.peopleResult.values.forEach(person => console.log(`Person: ${JSON.stringify(person)}`));
  }
  if (iaResult.readResult) {
    iaResult.readResult.blocks.forEach(block => console.log(`Text Block: ${JSON.stringify(block)}`));
  }
  if (iaResult.smartCropsResult) {
    iaResult.smartCropsResult.values.forEach(smartCrop => console.log(`Smart Crop: ${JSON.stringify(smartCrop)}`));
  }
  if (iaResult.tagsResult) {
    iaResult.tagsResult.values.forEach(tag => console.log(`Tag: ${JSON.stringify(tag)}`));
  }
}



export default App;
