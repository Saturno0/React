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

      {/*<button onClick={() => {
        setHidebutton(!hidebutton);
        setCount(0);
      }}>{hidebutton? "esconder contador": "mostrar contador"}</button>
      {hidebutton? (
        <div>
          <h2>{count}</h2>
          <button onClick={()=> setCount(count+1)}>sumar</button>
        </div>
      ) : (
        <p></p>
      )}*/}


      {/*{infoEmpleados.map((employ)=> {
      const {nombre, apellido, edad} = employ;
      return (
        <h4>
          El nombre es {nombre} {apellido} y su edad es {edad}
        </h4>
      )
  })}*/}
    </div>
  )
}

export default App
