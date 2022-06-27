import { useEffect, useState } from "react";
import Cards from "./Card";


function ItemList(){

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('Data.json')
        .then((resp) => resp.json())
        .then((data) => setInfo(data))
    },[])

    console.log(info)

    return(
        <div>
            {info && info.map(i => <Cards nombre={i.nombre} precio={i.precio} img={i.img} descripcion={i.descripcion} />)}
        </div>
    );
}

export default ItemList;