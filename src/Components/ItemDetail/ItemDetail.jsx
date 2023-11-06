import { Link } from "react-router-dom/dist";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
  return (
    <div className="container-itemdetail">
      {producto && (
        <div className="itemdetail">
          <div>
            <img
              className="img-itemdetail"
              src={`${producto.imagen}&id=${producto.id}`}
              alt={producto.nombre}
            />
          </div>
          <div className="container-detail">
            <h1>{producto.nombre}</h1>
            <p>{producto.descripcion}</p>
            <h2 className="precio">{`ARS ${producto.precio}`}</h2>
            <Link to="#" className="comprar">
              Comprar
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
