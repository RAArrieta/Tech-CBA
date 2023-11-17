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
      <li className="nav-item dropdown">
        <button
          className="nav-link dropdown-toggle"
          href="#"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Productos
        </button>
        <ul className="dropdown-menu">
          <Link to="/produtos/Notebooks" className="categorias">
            Notebooks
          </Link>
          <hr />
          <Link to="/produtos/PCs de Escritorio" className="categorias">
            PCs de Escritorio
          </Link>
          <hr />
          <Link to="/produtos/Monitores" className="categorias">
            Monitores
          </Link>
          <hr />
          <Link to="/produtos/Impresoras" className="categorias">
            Impresoras
          </Link>
          <hr />
          <Link to="/produtos/Placas de Video" className="categorias">
            Placas de Video
          </Link>
          <hr />
          <Link to="/produtos/Almacenamiento" className="categorias">
            Almacenamiento
          </Link>
        </ul>
      </li>
      <CartWidget />
    </ul>
  );
};

export default NavBar;
