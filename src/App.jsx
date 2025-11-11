// src/App.jsx
import React, { useEffect } from 'react';
import './fg-effects.js'; // ensure this is imported somewhere

function App() {
  useEffect(() => {
    document.addEventListener('fundinggauge:start', () => {
      // Example: route or trigger function
      console.log('Gauge start button clicked');
      // window.location.href = '/run'; // or navigate('/run');
    });
  }, []);

  return (
    <div className="App">
      <h1>FundingGauge UI</h1>
      {/* Your gauge component here */}
    </div>
  );
}

export default App;