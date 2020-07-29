import React from 'react';
import logo from './logo.svg';
import './App.css';
import NutritionLabel from './components/NutritionLabel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NutritionLabel
          fatGrams={10}
          servingSize={'1 cup (228g)'}
          servingsPerContainer={'16 crackers'}
        />
      </header>
    </div>
  );
}

export default App;
