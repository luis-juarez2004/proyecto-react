import { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import {getProductos, TestDB} from "../firebase/firebase";

function ItemListContainer({title}){
    const [item, setItem] = useState([])

    const {catid} = useParams(); 

    console.log("prueba", TestDB())

    useEffect(() => {
        getProductos().then((Productos) =>{
            setItem(Productos);
        })
        .catch( (errorMsg) => {
            console.log(errorMsg)
        })
    },[])

    console.log(item)
    return(
    <div className="flex">
        <h3>{title}</h3> 
        <ItemList items={item} />
    </div>
    );
}

export default ItemListContainer;