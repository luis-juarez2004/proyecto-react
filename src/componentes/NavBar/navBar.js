import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../cartWidget';

function NavBar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
            <CartWidget />
            <Navbar.Brand href="#home">Tienda Capricornio</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </>
    );
}

export default NavBar; 