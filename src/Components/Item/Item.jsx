import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

const Item = ({ productos }) => {
  const { theme } = useContext(CartContext);

  return (
    <Link className="card" to={`/item/${productos.id}`} style={{ backgroundColor: theme === "light" ? "white" : "#aca9a9" }}>
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
