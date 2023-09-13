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
            <h1>{hora}:{minutos}:{segundos}:{milisegundos}</h1>
        </div>
    );
}

export default Reloj;
