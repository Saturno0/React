import { Routes, Route } from 'react-router-dom';
import './App.css'
import Conditional_render from './conditional-render';
import Azar from './Azar';
import Calculadora from './Calculadora';
import Contador from './Contador';
import Fulbo from './fulbo';
import Loggin from './Loggin';
import Tiempo from './Tiempo';
import MainPaige from './MainPaige';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPaige/>}/>
        <Route path='/Azar' element={<Azar/>}/>
        <Route path='/Calculadora' element={<Calculadora/>}/>
        <Route path='/Conditional-render' element={<Conditional_render/>}/>
        <Route path='/Contador' element={<Contador/>}/>
        <Route path='/Fulbo' element={<Fulbo/>}/>
        <Route path='/Loggin' element={<Loggin/>}/>
        <Route path='/Tiempo' element={<Tiempo/>}/>
      </Routes>
    </div>
  )
}

export default App
