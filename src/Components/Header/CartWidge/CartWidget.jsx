import "./CartWidget.css"

const CartWidget = () => {
    return (
        <>
            <img onClick={()=>console.log("Carrito")} className="CartWidget" src={require("./CartWidget.png")} alt="CartWidget" />0
        </>
    )
}

export default CartWidget;