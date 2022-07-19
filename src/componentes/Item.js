import { Link} from "react-router-dom";

function Item({item}) {
return (
    <div className={`item_card ${item.categoria}-categoria`}>
    <span>{item.nombre}</span>
    <span>Categoria: {item.categoria}</span>
    <span>
        <img src={item.img} alt={item.nombre} className={'small-img'} />
    </span>
    <span>${item.precio}</span>
    <Link to={ `./item/${item.id}`}>Ver detalles del producto</Link>
    </div>
);
}

export default Item;