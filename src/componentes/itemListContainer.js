import { useEffect, useState } from "react";
import "./itemListContainer.css";
import {data} from '../data/data';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';
import {getProductos, TestDB} from "../firebase/firebase";

function ItemListContainer({title}){
    const [item, setItem] = useState([])

    const {catid} = useParams(); 

    console.log("prueba", TestDB())

    useEffect(() => {
        getProductos();
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const myData = catid?data.filter((item) => item.categoria === catid) : data;
                resolve(myData);
            }, 1000);
        });
        getItem.then((res) => {
            setItem(res);
        });
    },[catid])

    console.log(item)
    return(
    <div className="flex">
        <h3>{title}</h3> 
        <ItemList items={item} />
    </div>
    );
}

export default ItemListContainer;