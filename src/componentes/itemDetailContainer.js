import { useEffect, useState} from "react";
import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import { getProductosId } from "../firebase/firebase";

function ItemDetailContainer(){
    const [products, setProducts] = useState({});
    
    const {itemid} = useParams();

    

    useEffect(() => {
        getProductosId(itemid).then((res) => {
            setProducts(res);
        });
    }, [itemid]);
    return(
        <ItemDetail {...products} />
    );
}

export default ItemDetailContainer;