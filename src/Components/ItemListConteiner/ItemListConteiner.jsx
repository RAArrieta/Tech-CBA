import "./ItemListConteiner.css";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListConteiner = () => {
  const [listaProductos, setListaProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  const buscarProductos = () => {
    fetch("https://653d18e4f52310ee6a99e04d.mockapi.io/productos/")
      .then((resp) => resp.json())
      .then((json) => {
        if (categoria) {
          setListaProductos(
            json.filter((prod) => prod.categoria === categoria)
          );
          setTitulo(categoria);
        } else {
          setListaProductos(json);
          setTitulo("Productos");
        }
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    buscarProductos();
  }, [categoria]);

  return (
    <div>
      <ItemList listaProductos={listaProductos} titulo={titulo} />
    </div>
  );
};

export default ItemListConteiner;
