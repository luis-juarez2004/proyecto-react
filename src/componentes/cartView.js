import { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import ItemDetail from "./itemDetail";
import {addDoc, collection, getFirestore, } from "firebase/firestore";


function CartView({props}){

    const [orderId, setOrderId] = useState()

    const sendOrder = () => {
        orderId = {
            buyer: {nombre:"Jorge", phone:2236005123, email:"Jorge5@gmail.com"},
            items: [{nombre: "Yerba CBSE", precio:220}],
            date: new Date(),
            total: 220
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")
    
        addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    }

    const { cart, removeFromCart, getTotal, clearCart} = useContext(CartContext);
    return(
        <>
        {cart.length > 0 ? (
            <div>
                <h2>Carrito</h2>
                <div>
                    {cart.map(() => <ItemDetail key={props.id} id={props.id} stock={props.stock} img={props.img} nombre={props.nombre} precio={props.precio} removeFromCart={removeFromCart(props.id)}/>)}
                </div>
                <div>
                    <p>Precio final: ${getTotal()}</p>
                    <Link to="/">Sigue comprando</Link>
                    <button onClick={clearCart}>Vaciar carrito</button>
                    <button onClick={sendOrder}>Finalizar compra</button>
                </div>
            </div>
        ): (
            <div>
                <h2>El carrito se encuentra vacio</h2>
                <Link to="/">Ir a comprar</Link>
            </div>
        )}
        </>
    );
}

export default CartView;