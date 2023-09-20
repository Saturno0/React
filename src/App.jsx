import './App.css'
import { useState } from 'react';

const infoEmpleados = [
  {
      nombre: "Santino",
      apellido: "M",
      edad: "24"
  },
  {
      nombre: "Matias",
      apellido: "N",
      edad: "21"
  },
  {
      nombre: "Thiago",
      apellido: "J",
      edad: "22"
  }
];

function App() {
  const [count, setCount ] = useState(0);
  const [hidebutton, setHidebutton] = useState(false);
  return (
    <div className='App'>
      <h1>Practicas</h1>
      <button><a href="/contador">Contador</a></button>
      <button><a href='/azar'>Numero al azar</a></button>
      <button><a href='/calculadora'>Calculadora</a></button>
      <button><a href='/loggin'>Loggin</a></button>
      <button><a href='./reloj'>Reloj</a></button>
      <button><a href='./cronometro'>Cronometro</a></button>
      <button><a href='./conditional-render'>Hola</a></button>
      <button><a href='./pokemon'>Pokemon</a></button>
      <button><a href='./fulbo'>equipos</a></button>

    </div>
  )
}

export default App
