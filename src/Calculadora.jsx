import { useState } from 'react'
import './App.css'

function Calculadora() {
  const [num, setNum] = useState('')

  const handleButtonClick = (event) => {
    let buttonValue = event.target.innerText;
    let operator = event.target.id;
    if (operator === 1 || operator === 0 || operator === 2 || operator === 3 || operator === 4 || operator === 5 || operator === 6 || operator === 7 || operator === 8 || operator === 9 || operator === 10) {
      
    }
  };

  return (
    <div>
      <p>{num}</p>
      <div>
        <button onClick={handleButtonClick} id="7">7</button>
        <button onClick={handleButtonClick} id="8">8</button>
        <button onClick={handleButtonClick} id="9">9</button>
        <button onClick={handleButtonClick} id="div">/</button>
      </div>
      <div>
        <button onClick={handleButtonClick} id="4">4</button>
        <button onClick={handleButtonClick} id="5">5</button>
        <button onClick={handleButtonClick} id="6">6</button>
        <button onClick={handleButtonClick} id="*">*</button>
      </div>
      <div>
        <button onClick={handleButtonClick} id="1">1</button>
        <button onClick={handleButtonClick} id="2">2</button>
        <button onClick={handleButtonClick} id="3">3</button>
        <button onClick={handleButtonClick} id="men">-</button>
      </div>
      <div>
      <button onClick={handleButtonClick} id="0">0</button>
      <button onClick={handleButtonClick} id="igl">=</button>
      <button onClick={handleButtonClick} id="sum">+</button>
      </div>
      <button onClick={handleButtonClick} id="res">resetear</button>
    </div>
  )
}

export default Calculadora