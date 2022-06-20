import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';


function CartWidget(){
    return(
        <div style={{fontSize:"2em", color:"white"}}>
        <FontAwesomeIcon icon={faCartShopping} />
        </div>
    );
}

export default CartWidget;