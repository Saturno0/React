import { useState } from "react"

const Hola = () => {
    const [buttonValue, setButtonValue] = useState(false);

    return (
        <div>
            <button onClick={()=>setButtonValue(!buttonValue)}>{buttonValue? "Hola" : "Chau"}</button>
            {buttonValue && <h1>Hola</h1>}
            {!buttonValue && <h1>Chau</h1>}
        </div>
    );
}

export default Hola