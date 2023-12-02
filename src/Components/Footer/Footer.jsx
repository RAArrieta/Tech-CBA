import "./Footer.css";
import { Link } from "react-router-dom/dist";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerIzq">
        <p>Dirección: 25 de Mayo 233</p>
        <p>Teléfono: 782-3333</p>
        <p>mail: ventas@techcba.com.ar</p>
        <p>Horario de atención: Lunes a Viernes de 8 a 18hs</p>
      </div>
      <ul className="footerCentro">
        <Link to="/" className="rubro-footer">
          Home
        </Link>
        <Link to="/produtos/Notebooks" className="rubro-footer">
          Notebooks
        </Link>
        <Link to="/produtos/PCs de Escritorio" className="rubro-footer">
          PCs de Escritorio
        </Link>
        <Link to="/produtos/Monitores" className="rubro-footer">
          Monitores
        </Link>
        <Link to="/produtos/Impresoras" className="rubro-footer">
          Impresoras
        </Link>
        <Link to="/produtos/Placas de Video" className="rubro-footer">
          Placas de Video
        </Link>
        <Link to="/produtos/Almacenamiento" className="rubro-footer">
          Almacenamiento
        </Link>
      </ul>

      <div className="footerDer">
        <div className="alineoFooterDer">
          <img
            className="imgFooter"
            src={require("./imgFooter/logoFacebook.png")}
            alt="Facebook TechCBA"
          />
          <p className="alinearFooter">Facebook</p>
        </div>
        <div className="alineoFooterDer">
          <img
            className="imgFooter"
            src={require("./imgFooter/logoInstagram.png")}
            alt="Instagram TechCBA"
          />
          <p className="alinearFooter">Instagram</p>
        </div>
        <div className="alineoFooterDer">
          <img
            className="imgFooter"
            src={require("./imgFooter/logoWApp.png")}
            alt="WhatsApp TechCBA"
          />
          <p className="alinearFooter">351 111-2222</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
