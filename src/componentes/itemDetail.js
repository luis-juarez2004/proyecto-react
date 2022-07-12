import ItemCount from './ItemCount';
import "./ItemDetail.css";

function ItemDetail({id, nombre, precio, img, descripcion, categoria}){
    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
    };

    const clickHandler = () => {
        console.log("Compra finalizada");
    }
    return(
        <div className='detail-row'>
                <img src={img} alt={`${id}-${nombre}`}/>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <ItemCount initial={1} stock={10} onAdd={onAdd()}/>
                <button onClick={clickHandler}>Finalizar compra</button>
                <h3>${precio}</h3>
        </div>
    );
}

export default ItemDetail;