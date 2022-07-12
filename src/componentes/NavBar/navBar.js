import CartWidget from '../cartWidget';
import {Link} from 'react-router-dom';
import "./Navbar.css";

function NavBar() {
    const categorias = [
        {id: 'home', address: "/", text:"Todos los productos",},
        {id: 'Desayuno', address: "/categoria/Desayuno" ,text:"Desayuno",},
        {id: 'Cena', address: "/categoria/Cena", text:"Cena",},
    ];
    return (
        <section>
            <CartWidget />
        {categorias.map((cat) => {
            return(
                <Link to={cat.address} className="Links" key={cat.id}> {cat.text} </Link>
            );
        })}
    </section>
    );
}

export default NavBar; 