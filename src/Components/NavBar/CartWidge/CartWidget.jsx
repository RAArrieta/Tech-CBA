import { Link } from "react-router-dom";
import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

const CartWidget = () => {
  const { contadorCarrito } = useContext(CartContext);

  return (
    <Link to="/carrito" className="categorias">
      Carrito
      <div className="cantidad-cartw">{contadorCarrito()}</div>
    </Link>
    // <div className="CartWidget">
    //     CartWidget
    //     {/* <img onClick={()=>console.log("Carrito")} className="carrito" src={require("./CartWidget.png")} alt="CartWidget" />
    //     <div className="cantidad-cartw">0</div> */}
    // </div>
  );
};

export default CartWidget;
