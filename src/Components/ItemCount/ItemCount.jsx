import { Link } from "react-router-dom";

const ItemCount = ({ cantidad, agregar, descontar, stock, agregarAlCarrito }) => {
  return (
    <>
      <div className="stock">Cantidad: {stock}</div>
      <div className="contador">
        <button onClick={descontar} className="boton">
          -
        </button>
        <p className="cantidad">{cantidad}</p>
        <button onClick={agregar} className="boton">
          +
        </button>
      </div>
      <Link to="#" className="comprar" onClick={agregarAlCarrito}>
        Comprar
      </Link>
    </>
  );
};

export default ItemCount;
