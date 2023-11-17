import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoLS);

  const agregarAlCarrito = (producto, cantidad) => {
    const productoAgregado = { ...producto, cantidad };
    const newCarrito = [...carrito];
    const prodExistente = newCarrito.find(
      (prod) => prod.id === productoAgregado.id
    );
    if (prodExistente) {
      prodExistente.cantidad += cantidad;
    } else {
      newCarrito.push(productoAgregado);
    }
    setCarrito(newCarrito);
  };

  const contadorCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const total = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  const eliminarPedido = () => {
    setCarrito([]);
  };

  const eliminarProducto = (id) => {
    const productosFiltrados = carrito.filter((prod) => prod.id !== id);
    setCarrito(productosFiltrados);
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        contadorCarrito,
        total,
        eliminarPedido,
        eliminarProducto,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
