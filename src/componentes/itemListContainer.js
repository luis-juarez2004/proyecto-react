import { useEffect, useState } from "react";
import Item from "./Item";
import "./item.css";

function ItemListContainer({title}){
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('Data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
    },[])

    console.log(info)
    return(
    <section> 
    <div>
        <h3>{title}</h3> 
    </div>
        <div className="carta">
            {info && info.map(i => <Item nombre={i.nombre} precio={i.precio} img={i.img} descripcion={i.descripcion} categoria={i.categoria} /> )}
        </div>
    </section>
    );
}

export default ItemListContainer;