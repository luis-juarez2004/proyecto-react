import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { useContext } from 'react';
import { CartContext } from './cartContext';

function ItemDetail({item, items ,count}){
    const {addToCart} = useContext(CartContext);

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)
        addToCart(items , count);
    };

    const clickHandler = () => {
        console.log("Compra finalizada");
    }
    return(
        <div className='detail-row'>
                <img src={item.img} alt={`${item.id}-${item.nombre}`}/>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <button onClick={clickHandler}>Finalizar compra</button>
                <h3>${item.precio}</h3>
        </div>
    );
}

export default ItemDetail;