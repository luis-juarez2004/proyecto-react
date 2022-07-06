import { useEffect, useState } from "react";
import ItemDetail from "./itemDetail";
import {data} from "../data/data"

function ItemDetailContainer(){
    const [products, setProducts] = useState({});

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === '1');
                resolve(myData);
            }, 2000)
        });
        getItems.then((res) => {
            setProducts(res);
        });
    }, []);
    return(
        <ItemDetail {...products} />
    );
}

export default ItemDetailContainer;