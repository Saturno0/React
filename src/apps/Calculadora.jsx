import { useState } from 'react'
import './Index.css'

function Calculadora() {
  const [num, setNum] = useState('');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operacion, setOperacion] = useState(undefined);
  const [resultado, setResultado] = useState(0);


  const handleButtonClick = (event) => {
    setNum('');
    let buttonValue = event.target.innerText;
    let operator = event.target.id;
    if (buttonValue === '0' || buttonValue === '1' || buttonValue === '2' || buttonValue === '3' || buttonValue === '4' || buttonValue === '5' || buttonValue === '6' || buttonValue === '7' || buttonValue === '8' || buttonValue === '9') {
        setB(0);
        setNum(num + buttonValue);
        setB((parseInt(num + buttonValue)));
    } else {
      if (operator === 'res') {
        setNum('');
        setA(0);
        setB(0);
        setResultado(0);
        setOperacion(undefined);
      } else if(operator === 'sum' || operator === 'men' || operator === 'div' || operator === 'mul') {
        setA(b);
        setB(0);
        setOperacion(buttonValue);
        setNum(buttonValue);
      } else {
        if(operacion === '+') {
          setResultado(a+b);
        } else if(operacion === '-') {
          setResultado(a-b);
        } else if(operacion === '/') {
          setResultado(parseFloat(a/b));
        } else if(operacion === '*') {
          setResultado(parseFloat(a*b));
        }
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