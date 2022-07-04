function ItemDetail({id, nombre, precio, img, descripcion}){
    return(
        <div>
            <div>
                <img src={img} alt={id} />
                <div>
                <h2>{nombre}</h2>
                <p>{descripcion}</p>
                <h2>{precio}$</h2>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;