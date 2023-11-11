import { useState, useEffect } from "react";

const Reloj = () => {
    const [hora, setHora] = useState(new Date().getHours());
    const [minutos, setMinutos] = useState(new Date().getMinutes());
    const [segundos, setSegundos] = useState(new Date().getSeconds());
    const [milisegundos, setMilisegundos] = useState(new Date().getMilliseconds());

    useEffect(()=> {
        const interval = setInterval(() => {
            const fecha = new Date();
            setHora(fecha.getHours());
            setMinutos(fecha.getMinutes());
            setSegundos(fecha.getSeconds());
            setMilisegundos(fecha.getMilliseconds());
            
        },1);
        return ()=> clearInterval(interval)
    },[]);
    


    return(
        <div>
            <h1>Reloj:</h1>
            <h1>{hora.toString().padStart(2,0)}:{minutos.toString().padStart(2,0)}:{segundos.toString().padStart(2,0)}:{milisegundos.toString().padStart(3,0)}</h1>
        </div>
    );
}

export default Reloj;
