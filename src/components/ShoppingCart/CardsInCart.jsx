import { CartState } from '../ActionReducer/Context';
import { TYPES } from '../ActionReducer/Types';

export function CardsInCart (props) {
    const {id, data }  = props;
    let {img, name }  = data;
    const{dispatch,state}=CartState();
    const removeAllCart=() =>{dispatch({type:TYPES.REMOVE_ALL_FROM_CART,payload:id})};
    
    console.log(state)
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {img} alt={'img'+name} />
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
         </div>
          <button onClick={()=> removeAllCart(id)}>Eliminar del Carrito</button> 
        </div> 
        
    )
}