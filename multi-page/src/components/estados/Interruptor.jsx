// //2. Interruptor On/Off:
// // Implementa un botón que alterne entre los estados "Encendido" y "Apagado". Aprovechar este cambio de estado para cambiar la clase de un objeto, o sus estilos.

import { useState } from 'react';

export const Interruptor = () => {
    const [isOn, setIsOn] = useState(false);

    const isPrendida = isOn ? "Apagar" : "Encender";

    const darkStyle = {
        backgroundColor: 'black',
        color: 'white',
        padding: '1rem',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const lightStyle = {
        backgroundColor: 'white',
        color: 'black',
        padding: '1rem',
        border: '1px solid black',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const buttonStyle = isOn ? lightStyle : darkStyle;

    const handleClick = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <button onClick={handleClick} style={buttonStyle}>
                Interruptor {isPrendida}
            </button>
        </>
    );
};
