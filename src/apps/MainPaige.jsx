import React from "react";
import { Link } from "react-router-dom";

const MainPaige = () => {
    return(
        <div>
            <h1>Practicas</h1>
            <button><Link to="/Azar">Azar</Link></button>
            <button><Link to="/Calculadora">Calculadora</Link></button>
            <button><Link to="/Contador">Contador</Link></button>
            <button><Link to="/Fulbo">Fulbo</Link></button>
            <button><Link to="/Loggin">Loggin</Link></button>
            <button><Link to="/Tiempo">Tiempo</Link></button>
        </div>
    );
}

export default MainPaige;