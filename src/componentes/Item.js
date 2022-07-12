function Item({id, nombre, precio, categoria, img }) {
return (
    <div className={`item_card ${categoria}-categoria`}>
    <span>{nombre}</span>
    <span>Categoria: {categoria}</span>
    <span>
        <img src={img} alt={nombre} className={'small-img'} />
    </span>
    <span>${precio}</span>
    </div>
);
}

export default Item;