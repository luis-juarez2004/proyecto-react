import './App.css';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer title="Bienvenidos a Tienda Capricornio" />} />
      <Route path="/" element={<ItemDetailContainer />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App; 
