import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, total, eliminarPedido } = useContext(CartContext);

  const eliminarPed = () => {
    eliminarPedido();
  };

  return (
    <div>
      <h1>Carrito</h1>
      {carrito.map((prod) => {
        return (
          <div key={prod.id}>
            <h3>{prod.nombre}</h3>
            <p>Cantidad: {prod.cantidad}</p>
            <p>Precio: ${prod.precio}</p>
            <p>Subtotal: ${prod.cantidad * prod.precio}</p>
            <hr />
          </div>
        );
      })}
      {carrito.length !== 0 ? (
        <div>
          <h2>Total: ${total()}</h2>,
          <button onClick={eliminarPed}>Eliminar pedido</button>
        </div>
      ) : (
        <div>
          <h2>No tiene productos en el carrito</h2>
          <Link to="/" className="categorias">
            Agregue productos al carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carrito;
