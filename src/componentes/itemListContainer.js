import ItemList from "./ItemList";

function ItemListContainer({title}){
    return(
    <section> 
    <div>
        <h2>{title}</h2> 
    </div>
        <ItemList />
    </section>
    );
}

export default ItemListContainer;