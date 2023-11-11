import { useState } from 'react'

 const Counter = () => {
    let [count, setCount] = useState(0);
    return(
        <div>
            <h1>Contador</h1>
            <p>El contador esta en: {count}</p>
            <button onClick={() => setCount(count + 1)}>agrega</button>
            <button onClick={() => setCount(count - 1)}>saca</button>
            <button onClick={() => setCount(count * 2)}>multiplica por 2</button>
            <button onClick={() => setCount(count / 2)}>divide por 2</button>
            <button onClick={() => setCount(0)}>resetea a 0</button>
        </div>
     );
 }

 export default Counter;