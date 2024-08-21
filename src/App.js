import React, { useState } from 'react';

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



export default App;
