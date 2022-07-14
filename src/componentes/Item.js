function Item({item}) {
return (
    <div className={`item_card ${item.categoria}-categoria`}>
    <span>{item.nombre}</span>
    <span>Categoria: {item.categoria}</span>
    <span>
        <img src={item.img} alt={item.nombre} className={'small-img'} />
    </span>
    <span>${item.precio}</span>
    </div>
);
}

export default Item;