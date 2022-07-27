import ItemCount from './ItemCount';
import "./ItemDetail.css";
import { useContext, useState } from 'react';
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';

function ItemDetail(props){
    const {addToCart} = useContext(CartContext);

    const [ItemsCount, setItemsCount] = useState([]);

    const onAdd = (num) => {
        setItemsCount(num)
        addToCart(props, num);
    };

    console.log(useState)

    /* const clickHandler = () => {
        console.log("Compra finalizada");
    } */
    return(
        <div className='detail-row'>
                <h2>Detalle del producto</h2>
                <img src={props.img} alt={`${props.id}-${props.nombre}`}/>
                <h3>{props.nombre}</h3>
                <p>{props.descripcion}</p>
                {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                <button onClick={clickHandler}>Finalizar compra</button> */}
                <h3>${props.precio}</h3>
                {/* <Link to="./cart"><button>Ir al carrito</button></Link> */}
                <div>
                    {ItemsCount > 0 ? (
                        <Link to="/item/:itemid/cart">Finalizar Compra</Link>
                    ): (
                        <ItemCount onAdd={onAdd} stock={props.stock} initial={0} />
                    )}
                </div>
        </div>
    );
}

export default ItemDetail;