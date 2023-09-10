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

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
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
    path: '/loggin',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
