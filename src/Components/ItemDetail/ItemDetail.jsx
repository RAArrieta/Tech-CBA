import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

const ItemDetail = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const agregar = () => {
    cantidad < producto.stock && setCantidad(cantidad + 1);
  };

  const descontar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  return (
    <div className="container-itemdetail">
      {producto && (
        <div className="itemdetail">
          <div>
            <img
              className="img-itemdetail"
              src={`${producto.imagen}`}
              alt={producto.nombre}
            />
          </div>
          <div className="container-detail">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <h2 className="precio">{`ARS ${producto.precio}`}</h2>
            <ItemCount
              cantidad={cantidad}
              agregar={agregar}
              descontar={descontar}
              stock={producto.stock}
              agregarAlCarrito={() => {
                agregarAlCarrito(producto, cantidad);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
