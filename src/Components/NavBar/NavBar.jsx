import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <ul className="navBar">
            <Link to="/">Home</Link>
            <Link to="/produtos/Notebooks">Notebooks</Link>
            <Link to="/produtos/PCs de Escritorio">PCs de Escritorio</Link>
            <Link to="/produtos/Monitores">Monitores</Link>
            <Link to="/produtos/Impresoras">Impresoras</Link>
            <Link to="/produtos/Placas de Video">Placas de Video</Link>
            <Link to="/produtos/Almacenamiento">Almacenamiento</Link>
        </ul>
    )
}

export default NavBar;