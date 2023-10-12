import "./Footer.css"

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
                <li onClick={()=>console.log("footer Notebook")} className="rubro-footer">Notebooks</li>
                <li onClick={()=>console.log("footer PC")} className="rubro-footer">PCs de Escritorio</li>
                <li onClick={()=>console.log("footer Impresora")} className="rubro-footer">Impresoras</li>
                <li onClick={()=>console.log("footer VGA")} className="rubro-footer">Placas de Video</li>
                <li onClick={()=>console.log("footer Monitor")} className="rubro-footer">Monitores</li>
                <li onClick={()=>console.log("footer Almacenamiento")} className="rubro-footer">Almacenamiento</li>
            </ul>
            {/* <div className="footerCentro">
                <button className="rubro-footer">Notebooks</button>
                <button className="rubro-footer">PCs de Escritorio</button>
                <button className="rubro-footer">Impresoras</button>
                <button className="rubro-footer">Placas de Video</button>
                <button className="rubro-footer">Monitores</button>
                <button className="rubro-footer">Almacenamiento</button>
            </div> */}
            <div className="footerDer">
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoFacebook.png')} alt="Facebook TechCBA" />
                    <p className="alinearFooter">Facebook</p>
                </div>
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoInstagram.png')} alt="Instagram TechCBA" />
                    <p className="alinearFooter">Instagram</p>
                </div>
                <div className="alineoFooterDer">
                    <img className="imgFooter" src={require('./imgFooter/logoWApp.png')} alt="WhatsApp TechCBA" />
                    <p className="alinearFooter">351 111-2222</p>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer;