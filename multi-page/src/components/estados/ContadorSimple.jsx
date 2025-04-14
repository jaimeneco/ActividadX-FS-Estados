// // 1. Contador Simple:
// // Crea un componente con un botón que incremente un contador. Muestra el valor del contador en la pantalla.


import { useState } from 'react';

export const ContadorSimple = () => {
    const [contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Dolores");

    const handleClick = () => {
        setContador(contador + 1);
        const newNombre = nombre === "Francisco" ? "Dolores" : "Francisco";
        setNombre(newNombre);
    };

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={handleClick}>Incrementar {nombre}</button>
        </div>
    );
};