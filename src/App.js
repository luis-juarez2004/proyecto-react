import './App.css';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';
import CartView from './componentes/cartView';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './componentes/cartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Bienvenidos a Tienda Capricornio" />} />
            <Route path="/categoria/:catid" element={<ItemListContainer title="Filtrado" />} />
            <Route path="/item" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </div>
  );
}

export default App; 
