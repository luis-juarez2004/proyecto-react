import { useContext } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";
import ItemDetail from "./itemDetail";

function CartView({id, stock, nombre, precio}){
    const { cart, removeFromCart, getTotal, clearCart} = useContext(CartContext);
    return(
        <>
        {cart.length > 0 ? (
            <div>
                <h2>Finaliza la compra</h2>
                <div>
                    {cart.map(() => <ItemDetail key={id} id={id} stock={stock} nombre={nombre} precio={precio} removeFromCart={removeFromCart} />)}
                </div>
                <div>
                    <p>Precio final: ${getTotal()}</p>
                    <Link to="/">Sigue comprando</Link>
                    <button onClick={clearCart}>Vaciar carrito</button>
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