import "./Checkout.css";
import { useState, useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, total, eliminarPedido } = useContext(CartContext);
  const { register, handleSubmit } = useForm();
  const { theme } = useContext(CartContext);

  const crearPedido = (data) => {
    const dataPedido = {
      cliente: data,
      date: new Date(),
      productos: carrito,
      total: total(),
    };

    const pedidosRef = collection(db, "pedidos");
    addDoc(pedidosRef, dataPedido).then((doc) => {
      setPedidoId(doc.id);
      actualizaStock();
      eliminarPedido();
    });
  };

  if (pedidoId) {
    return (
      <div className="form-container" style={{ backgroundColor: theme === "light" ? "white" : "#aca9a9" }}>
        <h1>Compra Finalizada</h1>
        <br />
        <h5>Número de pedido: {pedidoId}</h5>
      </div>
    );
  }

  const actualizaStock = () => {
    carrito.forEach((prod) => {
      const actualizoProducto = doc(db, "productos", prod.id);
      updateDoc(actualizoProducto, {
        stock: prod.stock - prod.cantidad,
      });
    });
  };

  return (
    <div className="form-container" style={{ backgroundColor: theme === "light" ? "white" : "#aca9a9" }}>
      <div>
        <h1>Finalizar Compra</h1>
        <h5>Cargue los siguientes datos para confirmar la compra</h5>
        <form onSubmit={handleSubmit(crearPedido)} className="form-data">
          <input
            type="text"
            placeholder="Nombre y Apellido"
            {...register("nombre")}
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            required
          />
          <input
            type="phone"
            placeholder="Telefono"
            {...register("telefono")}
            required
          />
          <button className="conf-compra" type="submit">
            Comprar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
