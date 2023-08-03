import React, { useState } from 'react';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
    return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div className='App'>
      <button style={{ backgroundColor: buttonColor }} onClick={() => setButtonColor(newButtonColor)}>
        Change to {newButtonColor}
      </button>
    </div>
  );
}

export default App;
