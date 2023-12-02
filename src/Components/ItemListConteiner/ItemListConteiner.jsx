import "./ItemListConteiner.css";
import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../Firebase/config";

const ItemListConteiner = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;
  const { theme } = useContext(CartContext);

  useEffect(() => {
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;
    getDocs(q).then((resp) => {
      setTitulo(categoria);
      setListaProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [categoria]);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#e5e1e1" : "#aca9a9" }}>
      <ItemList listaProductos={listaProductos} titulo={titulo} />
    </div>
  );
};

export default ItemListConteiner;
