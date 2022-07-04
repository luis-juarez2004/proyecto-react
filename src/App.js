import './App.css';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Bienvenidos a Tienda Capricornio" />
      <ItemDetailContainer />
      </div>
  );
}

export default App; 
