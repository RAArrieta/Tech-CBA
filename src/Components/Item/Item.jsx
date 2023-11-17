import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  return (
    <Link className="card" to={`/item/${productos.id}`}>
      <img
        className="img-card"
        src={`${productos.imagen}`}
        alt={productos.nombre}
      />
      <div className="data-prod">
        <h4>{productos.nombre}</h4>
        <h4>{`$${productos.precio}`}</h4>
      </div>
    </Link>
  );
};

export default Item;
