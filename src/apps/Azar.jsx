import { useState } from 'react'

const Azar = () => {
    let [random, setRandom] = useState();
    let n = Math.floor(Math.random() * 1000 + 1);
    return(
        <div>
            <h1 onClick={ () => {setRandom(n)}}>El numero random es: {random}</h1>
        </div>
    );
}

export default Azar;