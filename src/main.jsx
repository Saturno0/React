import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Counter from './Contador.jsx'
import Azar from './Azar.jsx'
import Calculadora from './Calculadora.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './Loggin.jsx'
import Reloj from './reloj.jsx'
import Hola from './conditional-render.jsx'
import Pokemon from './pokemon.jsx'
import Fulbo from './Fulbo.jsx'
import Cronometro from './Cronometro.jsx'
import Tiempo from './Tiempo.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/pokemon',
    element: <Pokemon />
  },
  {
    path: '/fulbo',
    element: <Fulbo />
  },
  {
    path: '/tiempo',
    element: <Tiempo />
  },
  {
    path: '/reloj',
    element: <Reloj />
  },
  {
    path: '/cronometro',
    element: <Cronometro />
  },
  {
    path: '/contador',
    element: <Counter />
  },
  {
    path: '/calculadora',
    element: <Calculadora />
  },
  {
    path: '/azar',
    element: <Azar />
  },
  {
    path: '/conditional-render',
    element: <Hola />
  },
  {
    path: '/loggin',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
