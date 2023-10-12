import "./Header.css"
import CartWidget from "./CartWidge/CartWidget"

const Header = () => {
    return (
        <header className="encabezado">
            <img className="logo" src={require('./imgHeader/LogoTechCBA.png')} alt="Tech CBA logo" />
            <input className="buscador" type="text" placeholder="Buscar..."/>
            <CartWidget />
        </header>
    )
}

export default Header;