import { useEffect, useState } from "react";

const Cronometro = () => {
    const [timer, setTimer] = useState(undefined);
    const [time, setTime] = useState(0);

    const toggleTimer = () => {
        if(timer) {
            clearInterval(timer);
            setTimer(undefined);
        } else {
            const timerId = setInterval(() => setTime(t => t + 1), 10);
            setTimer(timerId)
        }
    };
    const m = Math.floor(time/6000) % 60;
    const s = Math.floor(time/100) % 60;
    const mls = time % 100;
    return(
        <div>
            <h1>Cronometro</h1>
            <h1>{m.toString().padStart(2,0)}:{s.toString().padStart(2,0)}:{mls.toString().padStart(2,0)}</h1>
            <button onClick={toggleTimer}>{timer? 'parar' : 'empzar'}</button>
            <button onClick={()=>setTime(0)}>resetear</button>
        </div>
    );
}
export default Cronometro;