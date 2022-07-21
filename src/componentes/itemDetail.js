import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { useContext } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';

function ItemDetail({items, count, img, id, nombre, descripcion, precio}){
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
                <h2>Detalle del producto</h2>
                <img src={img} alt={`${id}-${nombre}`}/>
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <Link to="./cart"><button onClick={clickHandler}>Finalizar compra</button></Link>
                <h3>${precio}</h3>
        </div>
    );
}

export default ItemDetail;