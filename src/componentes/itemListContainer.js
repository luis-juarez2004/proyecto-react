import { useEffect, useState } from "react";
import "./item.css";
import {data} from '../data/data';
import ItemList from "./ItemList";
import {useParams} from 'react-router-dom';

function ItemListContainer({title}){
    const [item, setItem] = useState([])

    const {catid} = useParams(); 

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const myData = catid?data.filter((item) => item.categoria === catid) : data;
                resolve(myData);
            }, 1000);
        });
        getItem.then((res) => {
            setItem(res);
        });
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