import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokemon = () => {
    const [data, setData] = useState([]);
    const url = 'https://pokeapi.co/api/v2/pokemon';

    fetch(url)
        .then((response)=> response.json())
        .then((data)=> setData(data.results));

    return(
        <div>
            <div className="Home">
                <button><Link to="/">Home</Link></button>
            </div>
            <div>
                <ul>
                {data.map((pokemon, index)=>(
                    <li key={index} style={{ color: 'yellow' }}>{pokemon.name}</li>        
                ))}
                </ul>
            </div>
        </div>
    );

}
export default Pokemon