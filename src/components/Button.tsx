import React, {FunctionComponent} from 'react';

interface ButtonProps {
    handleCalculate: (char: string) => void
    handleClear: () => void
    handleEqual: () => void
}

const Button: FunctionComponent<ButtonProps> = ({
    handleCalculate,
    handleClear,
    handleEqual,
}) => {
  return (
    <div className='buttons'>
      <button className='btn num' onClick={() => handleCalculate('1')}>1</button>
      <button className='btn num' onClick={() => handleCalculate('2')}>2</button>
      <button className='btn num' onClick={() => handleCalculate('3')}>3</button>
      <button className='btn operator' onClick={() => handleCalculate('+')}>+</button>
      <button className='btn num' onClick={() => handleCalculate('4')}>4</button>
      <button className='btn num' onClick={() => handleCalculate('5')}>5</button>
      <button className='btn num' onClick={() => handleCalculate('6')}>6</button>
      <button className='btn operator' onClick={() => handleCalculate('-')}>-</button>
      <button className='btn num' onClick={() => handleCalculate('7')}>7</button>
      <button className='btn num' onClick={() => handleCalculate('8')}>8</button>
      <button className='btn num' onClick={() => handleCalculate('9')}>9</button>
      <button className='btn operator' onClick={() => handleCalculate('*')}>*</button>
      <button className='btn clear' onClick={() => handleClear()}>C</button>
      <button className='btn num' onClick={() => handleCalculate('0')}>0</button>
      <button className='btn num' onClick={() => handleEqual()}>=</button>
      <button className='btn operator' onClick={() => handleCalculate('/')}>/</button>
    </div>
  )
}
export default Button;