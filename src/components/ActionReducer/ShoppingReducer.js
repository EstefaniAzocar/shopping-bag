import { AllProduct } from "../Products/Data/Categorias";
import { TYPES } from "./Types";

export const InitalState={

    products:AllProduct
    
    ,
    cart:[],
};

export function shoppingReducer(state, action){
    switch(action.type){
        case TYPES.ADD_TO_CART:{
            let newItem = {id:action.payload};

            let itemInCart = state.cart.find((item) => item.id === newItem.id);
            
            return(
                  itemInCart?{...state,
                    cart: state.cart.map((item) => item.id === newItem.id
                        ?{...item, quantity: item.quantity+1}
                            :item)}
                            :{
                             ...state,
                            cart:[...state.cart, {...newItem, quantity:1}]
                                }
                        );
        }
           
        
        case TYPES.REMOVE_ALL_FROM_CART: 
            return{
                ...state,cart:state.cart.filter((item)=>item.id!==action.payload)
            }
        case TYPES.CLEAR_CART:

            return InitalState;

        default:
            return state;
    }

}