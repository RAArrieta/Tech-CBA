import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const id = useParams().id;

  const buscarProducto = () => {
    fetch(`https://653d18e4f52310ee6a99e04d.mockapi.io/productos/${id}`)
      .then((resp) => resp.json())
      .then((json) => setProducto(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    buscarProducto(id);
  }, []);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
