import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "./CartWidge/CartWidget";

const NavBar = () => {
  return (
    <ul className="navBar">
      <img
        className="logo"
        src={require("./imgNavBar/LogoTechCBA.png")}
        alt="Tech CBA logo"
      />
      
      <Link to="/" className="categorias">
        Home
      </Link>
      <Link to="/produtos/Notebooks" className="categorias">
        Notebooks
      </Link>
      <Link to="/produtos/PCs de Escritorio" className="categorias">
        PCs de Escritorio
      </Link>
      <Link to="/produtos/Monitores" className="categorias">
        Monitores
      </Link>
      <Link to="/produtos/Impresoras" className="categorias">
        Impresoras
      </Link>
      <Link to="/produtos/Placas de Video" className="categorias">
        Placas de Video
      </Link>
      <Link to="/produtos/Almacenamiento" className="categorias">
        Almacenamiento
      </Link>

      <CartWidget />
    </ul>
  );
};

export default NavBar;
