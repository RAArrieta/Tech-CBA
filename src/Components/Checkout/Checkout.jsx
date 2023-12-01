import { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Firebase/config';


const Checkout = () => {
    const [pedidoId, setPedidoId] = useState("");
    const { carrito, total, eliminarPedido } = useContext(CartContext);
    const { register, handleSubmit } = useForm()

    const compra = (data) => {
        const dataPedido = {
            cliente: data,
            productos: carrito,
            total: total(),
        }

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, dataPedido).then((doc) => {
            setPedidoId(doc.id);
            eliminarPedido();
        })
    }
    if (pedidoId) {
        return (
            <div>
                <h1>Compra Finalizada</h1>
                <br />
                <h5>Número de pedido es: {pedidoId}</h5>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizar Compra</h1>
            <form onSubmit={handleSubmit(compra)}>
                <input type="text" placeholder="Nombre y Apellido" {...register("nombre")} />
                <input type="email" placeholder="E-mail" {...register("email")} />
                <input type="phone" placeholder="Telefono" {...register("telefono")} />
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout
