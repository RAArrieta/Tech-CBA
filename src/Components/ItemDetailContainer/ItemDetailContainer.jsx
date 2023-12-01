import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase/config";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null); 
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setProducto({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
