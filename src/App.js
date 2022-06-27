import './App.css';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Bienvenidos a Tienda Capricornio" />
      </div>
  );
}

export default App; 
