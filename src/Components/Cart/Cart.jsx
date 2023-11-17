import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, total, eliminarPedido, eliminarProducto } =
    useContext(CartContext);

  const eliminarPed = () => {
    eliminarPedido();
  };

  return (
    <div className="carrito-container">
      <h1>Carrito</h1>
      {carrito.map((prod) => {
        return (
          <div key={prod.id} className="carrito-producto">
            <p className="producto-codigo">{`Cod: ${prod.id}`}</p>
            <h5 className="producto-nombre">{prod.nombre}</h5>
            <p className="producto-cantidad">Cantidad: {prod.cantidad}</p>
            <p className="producto-precio">Precio: ${prod.precio}</p>
            <p className="producto-subtotal">
              Subtotal: ${prod.cantidad * prod.precio}
            </p>
            <button
              onClick={() => eliminarProducto(prod.id)}
              className="producto-eliminar"
            >
              X
            </button>
            <hr className="producto-divisor" />
          </div>
        );
      })}
      {carrito.length !== 0 ? (
        <div>
          <h2 className="carrito-total">Total: ${total()}</h2>,
          <button onClick={eliminarPed} className="eliminar-pedido">
            Eliminar pedido
          </button>
          <Link to="/" className="eliminar-pedido">
            Agregue más productos
          </Link>
        </div>
      ) : (
        <div>
          <h4 className="mensaje-agregar">No tiene productos en el carrito</h4>
          <Link to="/" className="agregar-producto">
            Agregue productos al carrito
          </Link>
        </div>
      )}
    </div>
  );
};

export default Carrito;
