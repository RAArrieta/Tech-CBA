import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { contadorCarrito } = useContext(CartContext);
  
  return (
    <Link to="/carrito" className="CartWidget">
      <img onClick={() => console.log("Carrito")} className="carrito" src={require("./CartWidget.png")} alt="CartWidget" />
      <div className="cantidad-cartw">{contadorCarrito()}</div>
    </Link>
  );
};

export default CartWidget;
