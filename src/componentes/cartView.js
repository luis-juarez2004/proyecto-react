import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartContext";
import { Link } from "react-router-dom";

const CartView = () => {
    const { cart, removeFromCart, getTotal} = useContext(CartContext);
    const [empty, setEmpty] = useState(true);
    const [showOrder, setShowOrder] = useState(true);
    window.scrollTo(0,0)

    useEffect(() => {
        if (cart.lenght === 0 ) {
            setEmpty(true);
        }else {
            setEmpty(false);
        }
    }, [cart.lenght]);

    if(!empty){
        return (
            <div>
                {showOrder? (
                    <div>
                        {cart.map((e) => { 
                                <div key={e.id}>
                                <img src={e.img} alt={e.nombre}/>
                                <span>{e.nombre}</span>
                                <span>${e.precio}</span>
                                <span>Cantidad: {e.quantity}</span>
                                <button onClick={() => removeFromCart(e.id)}>{""}
                                Eliminar{""}</button>
                            </div>
                })} 
                        <div>
                            <h4>Total: ${getTotal()}</h4>
                            <button onClick={() => setShowOrder(false)}>
                                {""}
                                Confirmar compra{""}
                            </button>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )} ;  
            </div>
        )
    } else {
        return ( 
            <div>
                <h1>No hay elementos en el carrito</h1>
                <Link to="/item">
                    {""}
                    <button>Volver</button>{""}
                </Link>
            </div>
        );
    }
};

export default CartView;