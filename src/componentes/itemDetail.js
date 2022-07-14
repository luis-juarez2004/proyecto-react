import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { useContext } from 'react';
import { CartContext } from './cartContext';

function ItemDetail({id, nombre, precio, img, descripcion, categoria, item, count}){
    const {addToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
        addToCart(item, count);
    };

    const clickHandler = () => {
        console.log("Compra finalizada");
    }
    return(
        <div className='detail-row'>
                <img src={img} alt={`${id}-${nombre}`}/>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd()}/>
                <button onClick={clickHandler}>Finalizar compra</button>
                <h3>${precio}</h3>
        </div>
    );
}

export default ItemDetail;