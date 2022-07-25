import { useState } from "react";

function ItemCount({initial, stock, onAdd}){
    const [num, setNum] = useState(initial);

    const addToCart = () => {
        onAdd(num)
    }

    const sumar = () => {
        if(num < stock) {
            setNum(num+1)
        }
    }

    const restar = () => {
        if(num > 1) {
            setNum(num-1)
        }
    }

    
    return (
        <div>
            <button onClick={restar}>-</button>
            <span>{num}</span>
            <button onClick={sumar}>+</button>
            <div>
                <button onClick={addToCart}>Agregar al carrito</button>
            </div>
        </div>
    )
    }

export default ItemCount;