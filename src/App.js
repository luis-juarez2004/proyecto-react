import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <img alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top" />
          <Navbar.Brand href="#home">Tienda Capricornio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
      </div>
  );
}

export default App; 
