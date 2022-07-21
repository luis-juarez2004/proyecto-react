import Item from "./Item";

function ItemList({items}){
    return(
        <section className="flex-row">
            {items.map((item) => (
                <Item {...item} key={items.id} />
            ))}
        </section>
    );
}

export default ItemList;