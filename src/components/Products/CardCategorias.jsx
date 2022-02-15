import { CartState } from '../ActionReducer/Context';
import { TYPES } from '../ActionReducer/Types';
import './Products.css';
export function Cards (props) {
    const {img, name, id }  = props;
    const{dispatch,state}=CartState();
    const addToCart=() =>{dispatch({type:TYPES.ADD_TO_CART,payload:id})};
    console.log(state)
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {img} alt={'img'+name} />
            </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
         </div>
         <button onClick={()=> addToCart(id)}>Cotizar</button>
        </div> 
    )
}