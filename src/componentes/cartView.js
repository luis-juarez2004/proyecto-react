import { useContext, useState } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import ItemDetail from "./itemDetail";
import {addDoc, collection, getFirestore, } from "firebase/firestore";


function CartView({nombre, id, stock, img, precio}){

 /*   let [orderId, setOrderId] = useState()

    const sendOrder = () => {
        orderId = {
            buyer: {nombre:"Jorge", phone:2236005123, email:"Jorge5@gmail.com"},
            items: [{nombre: "Yerba CBSE", precio:220}],
            date: new Date(),
            total: 220
        }

        const db = getFirestore();

        const ordersCollection = collection(db, "orders")
    
        addDoc(ordersCollection, orderId).then(({id}) => setOrderId(id))
    }*/

    const { cart, removeFromCart, getTotal, clearCart} = useContext(CartContext);
    return(
        <>
        {cart.length > 0 ? (
            <div>
                <h2>Carrito</h2>
                <div>
                    {cart.map(() => <ItemDetail key={id} id={id}  precio={precio} removeFromCart={removeFromCart}/>)}
                </div>
                <div>
                    <p>Precio final: ${getTotal()}</p>
                    <Link to="/">Sigue comprando</Link>
                    <button onClick={clearCart}>Vaciar carrito</button>
                    <button>Finalizar compra</button>
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