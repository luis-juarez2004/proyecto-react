import { useEffect, useState, useParams } from "react";
import ItemDetail from "./itemDetail";
import {data} from "../data/data"

function ItemDetailContainer(){
    const [products, setProducts] = useState({});
    
    const {itemid} = useParams();

    useEffect(() => {
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === itemid) 
                resolve(myData);
            }, 2000)
        });
        getItems.then((res) => {
            setProducts(res);
        });
    }, []);
    return(
        <ItemDetail item={products} />
    );
}

export default ItemDetailContainer;