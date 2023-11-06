import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  return (
    <div className="card">
      <img
        className="img-card"
        src={`${productos.imagen}&id=${productos.id}`}
        alt={productos.nombre}
      />
      <div className="data-prod">
        <h2>{productos.nombre}</h2>
        <h3>{`$${productos.precio}`}</h3>
        <p>{productos.descripcion}</p>
        <Link className="detalle-prod" to={`/item/${productos.id}`}>
          Ver
        </Link>
      </div>

    </div>
  );
};

export default Item;
