import {Button} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import ItemCount from './ItemCount';

const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`)
};

function Item(props) {
return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text>
        {props.descripcion}
        </Card.Text>
        <button>ver detalles del producto</button>
        <Button variant="success">{props.precio}$</Button>
        <ItemCount initial={1} stock={10} onAdd={onAdd}/>
    </Card.Body>
    </Card>
);
}

export default Item;