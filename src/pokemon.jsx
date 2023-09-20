import { useEffect, useState } from "react";

const Pokemon = () => {
    const [data, setData] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon';
    //const estilo = {color : "green",};

    fetch(url)
        .then((response)=> response.json())
        .then((data)=> setData(data.results));

    return(
        <div>
            <ul /*style={estilo}*/>
            {data.map((pokemon, index)=>(
                <li key={index} style={{ color: 'yellow' }}>{pokemon.name}</li>        
            ))}
            </ul>
        </div>
    );

}
export default Pokemon