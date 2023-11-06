

const ItemDetail = ({producto}) => {
  return (
    <div>
      {
        producto &&
          <div>
            <img className="img-card" src={`${producto.imagen}&id=${producto.id}`} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <h3>{`$${producto.precio}`}</h3>
            <p>{producto.descripcion}</p>
          </div>
          
      }
    </div>
  )
}

export default ItemDetail

