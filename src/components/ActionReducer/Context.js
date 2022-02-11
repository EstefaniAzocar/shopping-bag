import React,{useContext, createContext, useReducer} from "react";
import { InitalState, shoppingReducer } from "./ShoppingReducer";

const Cart =createContext();
const Context = (props) =>{

    const{children}=props;
    const[state,dispatch]=useReducer(shoppingReducer,InitalState);

    return(
        <Cart.Provider value={{state,dispatch}}>
            {children}
        </Cart.Provider>
    );

}
 export default Context;

 export const CartState = () => {
     return useContext(Cart);
 }