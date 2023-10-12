import "./NavBar.css";

const NavBar = () => {
    return (
        <ul className="navBar">
            <li onClick={() => console.log("Click Notebook")} className="rubro">Notebooks</li>
            <li onClick={() => console.log("Click PC")} className="rubro">PCs de Escritorio</li>
            <li onClick={() => console.log("Click Monitor")} className="rubro">Monitores</li>
            <li onClick={() => console.log("Click Impresora")} className="rubro">Impresoras</li>
            <li onClick={() => console.log("Click VGA")} className="rubro">Placas de Video</li>
            <li onClick={() => console.log("Click Almacenamiento")} className="rubro">Almacenamiento</li>
        </ul>
    )
}

export default NavBar;