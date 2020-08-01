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
          amountPerServing={''}
          calories={200}
          caloriesFromFat={120}
          percentDailyValue={''}
          totalFat={10}
          transFat={1}
          cholesterol={8}
          sodium={200}
          saturatedFat={6}
        />
      </header>
    </div>
  );
}

export default App;
