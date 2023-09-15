import { useState } from 'react'
import './App.css'

function Calculadora() {
  const [num, setNum] = useState('');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);


  const handleButtonClick = (event) => {
    setNum('');
    let buttonValue = event.target.innerText;
    let operator = event.target.id;
    if (buttonValue === '0' || buttonValue === '1' || buttonValue === '2' || buttonValue === '3' || buttonValue === '4' || buttonValue === '5' || buttonValue === '6' || buttonValue === '7' || buttonValue === '8' || buttonValue === '9') {
        setB(0);
        setNum(num+ buttonValue);
        setB(b+ (parseInt(num + buttonValue)));
        console.log(a,b);
    } else {
      if (operator === 'res') {
        console.log(a,b)
        setNum('');
      } else if(operator === 'sum') {
        console.log(a,b)
        setNum(buttonValue);
      } else if(operator === 'men') {
        console.log(a,b)
        setNum(buttonValue);
      } else if(operator === 'div') {
        console.log(a,b)
        setNum(buttonValue);
      } else if(operator === 'mul') {
        console.log(a,b)
        setNum(buttonValue);
      }
    }
  };

  return (
    <div>
      <p>{num}</p>
      <br />
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
        <button onClick={handleButtonClick} id="mul">*</button>
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