import { useState } from "react";

function ItemCount({initial, stock, onAdd}){
    const [count, setCount] = useState(initial);

    const decrease = () => {
        setCount(count + initial);
    }
    const increase = () => {
        setCount(count - stock)
    }

    
    return (
        <div>
            <button disabled={count <= 1} onClick={decrease}>-</button>
            <span>{count}</span>
            <button disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
    }

export default ItemCount;