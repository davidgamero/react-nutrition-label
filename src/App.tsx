import React from 'react';
import logo from './logo.svg';
import './App.css';
import NutritionLabel from './components/NutritionLabel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NutritionLabel
          servingSize={'1 cup (228g)'}
          servingsPerContainer={'16 crackers'}
          calories={200}
          caloriesFromFat={120}
          totalFat={10}
          saturatedFat={6}
          transFat={1}
          cholesterol={8}
          sodium={200}
          totalCarbohydrate={300}
          dietaryFiber={0}
          sugars={5}
          protein={5}
          vitamins={['Vitamin D 2%', 'Vitamin A 7%', 'Iron 4%']}
        />
      </header>
    </div>
  );
}

export default App;
