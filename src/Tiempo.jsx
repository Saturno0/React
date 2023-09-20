import { useState } from 'react';
import Cronometro from './Cronometro.jsx'
import Reloj from './reloj.jsx'

const Tiempo = () => {
    const[reloj, setReloj] = useState(false);
    const[cronometro, setCronometro] = useState(false);

    const Salir = () => {
        if(cronometro) setCronometro(false);
        else           setReloj(false);
    };

    return(
        <div>
            {reloj || cronometro? (
                <div>
                    {reloj && (<Reloj />)}
                    {cronometro && (<Cronometro />)}
                    <button onClick={Salir}>Salir</button>
                </div>
            ) : (
                <div>
                    <button onClick={()=>setReloj(true)}>Reloj</button>
                    <button onClick={()=>setCronometro(true)}>Cronometro</button>
                </div>
            )}
        </div>
    );
}

export default Tiempo;