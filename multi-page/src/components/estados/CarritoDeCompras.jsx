import { useState } from "react";

export const CarritoDeCompras = () => {
    // Simulamos una lista de productos disponibles
    const productosDisponibles = [
        { id: 1, nombre: "Camiseta", precio: 20 },
        { id: 2, nombre: "Pantalón", precio: 35 },
        { id: 3, nombre: "Zapatillas", precio: 60 },
    ];

    const [carrito, setCarrito] = useState([]);

    // Añadir producto al carrito
    const agregarAlCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find((item) => item.id === producto.id);
            if (existe) {
                return prevCarrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                );
            } else {
                return [...prevCarrito, { ...producto, cantidad: 1 }];
            }
        });
    };

    // Eliminar un producto del carrito
    const eliminarDelCarrito = (id) => {
        setCarrito((prevCarrito) =>
            prevCarrito.filter((item) => item.id !== id)
        );
    };

    // Calcular total
    const calcularTotal = () => {
        return carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
    };

    return (
        <div style={{ padding: "1rem" }}>
            <h2>Productos</h2>
            <ul>
                {productosDisponibles.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - ${producto.precio}
                        <button onClick={() => agregarAlCarrito(producto)}>Añadir</button>
                    </li>
                ))}
            </ul>

            <hr />

            <h2>🛒 Carrito</h2>
            {carrito.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <ul>
                    {carrito.map((item) => (
                        <li key={item.id}>
                            {item.nombre} x{item.cantidad} = ${item.precio * item.cantidad}
                            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            )}

            <h3>Total: ${calcularTotal()}</h3>
        </div>
    );
};
