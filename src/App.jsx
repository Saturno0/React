import { Routes, Route } from 'react-router-dom';
import './App.css'
import Conditional_render from './apps/conditional-render';
import Azar from './apps/Azar';
import Calculadora from './apps/Calculadora';
import Contador from './apps/Contador';
import Fulbo from './apps/fulbo';
import Loggin from './apps/Loggin';
import Tiempo from './apps/Tiempo';
import MainPaige from './apps/MainPaige';

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
