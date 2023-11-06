import Item from "../Item/Item";

const ItemList = ({ listaProductos, titulo }) => {
  return (
    <div>
      <h1 className="titulo">{titulo}</h1>
      <div className="list-container">
        {listaProductos.map((productos) => (
          <Item productos={productos} key={productos.id} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
