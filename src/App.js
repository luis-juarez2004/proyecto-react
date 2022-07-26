import './App.css';
import ItemDetailContainer from './componentes/itemDetailContainer';
import ItemListContainer from './componentes/itemListContainer';
import NavBar from './componentes/NavBar/navBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './componentes/cartContext';/* 
import { Cart } from './componentes/cart'; */
import CartView from './componentes/cartView';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9debWYQj6lKTzl3EIgz0tXaf1rEXKLF4",
  authDomain: "tiendacapricornio-3840f.firebaseapp.com",
  projectId: "tiendacapricornio-3840f",
  storageBucket: "tiendacapricornio-3840f.appspot.com",
  messagingSenderId: "365687380749",
  appId: "1:365687380749:web:3b890ed2b34e3bdef32e44",
  measurementId: "G-DJ6VG9GR4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer title="Bienvenidos a Tienda Capricornio" />} />
            <Route path="/categoria/:catid" element={<ItemListContainer title="Filtrado" />} />
            <Route path="/item/:itemid" element={<ItemDetailContainer />} />
            <Route path='/item/:itemid/cart' element={<CartView/>} />
          </Routes>
        </BrowserRouter>
        </CartProvider>
      </div>
  );
}

export default App; 
