import { createContext, useState } from "react";

export const CartContext = createContext([])

const {Provider} = CartContext

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const clearCart = () => {
        setCart([]);
    };

    const addToCart = (props, num) => {
        console.log(props)
        if(isInCart(props.id)) {
            const newCart = [...cart]
            for(const element of newCart) {
                if(element.props.id === props.id) {
                    element.num = element.num + num;
                }
            }
            setCart(newCart);
        }else {
            setCart(
                [
                    ...cart,
                    {
                        props : props,
                        num : num,
                    }
                ]
            )
        }
    };

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.props.id !== id)
        setCart(newCart);
    };

    const isInCart = (id) => {
        return cart.find((element) => element.props.id === id);
    }

    const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.props.num)
        return cantidad
    }

    const getTotal = () => {
        let total = 0 
        cart.forEach((element) => {
            total = total + (element.num * element.props.precio)
        })
        return total
    }

    /* const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart,
        isInCart,
        getQuantity,
        getTotal,
    } */

    return (
        <Provider value={{cart,
            clearCart,
            addToCart,
            removeFromCart,
            isInCart,
            getQuantity,
            getTotal,
        }}>
            {children}
        </Provider>
    )
}