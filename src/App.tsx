import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';


function App() {
  //calculator states
  // const [value, setValue] = useState<number>(0);
  const [calculate, setCalculate] = useState<string>('');

  const handleCalculate = (char: string) => {
    setCalculate(calculate + char);
  }

  const handleEqual = () => {
    setCalculate((window as any).eval(calculate))
  }

  const handleClear = () => {
    setCalculate('');
  }

  return (
    <div className="App">
      <h1> Calculator </h1>
      <main className="calculator">
        <Display value={calculate}/>
        <Button
          handleCalculate={handleCalculate}
          handleClear={handleClear}
          handleEqual={handleEqual}
        />
      </main>
    </div>
  );
}

export default App;
