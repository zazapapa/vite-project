// App.js
import React, { useState, useEffect } from 'react';
import Train from './Train';

const App = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => prevPosition + 1);
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <Train position={position} />
    </div>
  );
}

export default App;
