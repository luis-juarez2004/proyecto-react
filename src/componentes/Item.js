import { Link} from "react-router-dom";

function Item({img, categoria, nombre, precio,id}) {
return (
    <div className={`item_card ${categoria}-categoria`}>
    <span style={{color:"white"}}>{nombre}</span>
    <span style={{color:"white"}}>Categoria: {categoria}</span>
    <span>
        <img src={img} alt={nombre} className={'small-img'} />
    </span>
    <span style={{color:"white"}}>${precio}</span>
    <Link to={ `./item/${id}`}>Ver detalles del producto</Link>
    </div>
);
}

export default Item;