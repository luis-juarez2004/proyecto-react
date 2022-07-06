import ItemCount from './ItemCount';

function ItemDetail({id, nombre, precio, img, descripcion, categoria}){
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    };
    return(
        <div>
            <h2>{categoria}</h2>
            <div>
                <img src={img} alt={id}  />
                <div>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <ItemCount initial={1} stock={10} onAdd={onAdd}/>
                <h3>{precio}$</h3>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;