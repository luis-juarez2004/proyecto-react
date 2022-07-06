import {Card} from 'react-bootstrap';


function Item(props) {
return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
        <Card.Title>{props.nombre}</Card.Title>
        <Card.Text >
        Categoria:{props.categoria}
        </Card.Text>
        <button>Ver detalles del producto</button>
    </Card.Body>
    </Card>
);
}

export default Item;