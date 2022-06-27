import './App.css';
import Cards from './componentes/Card';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Bienvenidos a Tienda Capricornio" />
      <Cards nombre='Gaseosa' descripcion='Coca Cola 2,25L' precio='230$' img='' />
      <Cards nombre='Azucar' descripcion='Azucar Ledesma 1KG' precio='150$' img='' />
      <Cards nombre='Yerba' descripcion='Yerba CBSÉ 1/2KG' precio='200$' img='' />
      </div>
  );
}

export default App; 
