import "./CartWidget.css"

const CartWidget = () => {
    return (
        <div className="CartWidget">
            <img onClick={()=>console.log("Carrito")} className="carrito" src={require("./CartWidget.png")} alt="CartWidget" />
            <div className="cantidad-cartw">0</div>
        </div>
    )
}

export default CartWidget;