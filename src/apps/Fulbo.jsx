import { useState } from "react";

const Fulbo = () => {
        const equipos = [
        'Newells', 
        'Independiente',
        'Estudiantes',
        'Argentinos Jrs', 
        'San Lorenzo',
        'Zaracho FC',
        'Jorge Newbery',
        'Racing',
        'Racing de Cordoba',
        'Estudiantes de Caseros',
        'Independiente del Valle',
        'Almagro',
        'Zaracho FC Filial Asuncion'
  ];

    const [busqueda, setBusqueda] = useState('')
    const [lista, setLista] = useState(equipos)
    
    
    const handleChange = e => {
        setBusqueda(e.target.value);
        let array = equipos.filter(cosa => {
            let a1 = cosa.toLowerCase();
            let a2 = e.target.value.toLowerCase();
            if (a1.startsWith(a2)) return a1;
            else return null;
        });
        setLista(array);
    };

    return (
        <div>
            <h1>Filtra equipos:</h1>
            <input type="text" 
                value={busqueda}
                onChange={handleChange}
            />
            <ul>
                {lista.map(equipo => (
                    <li key={equipo}>{equipo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Fulbo;