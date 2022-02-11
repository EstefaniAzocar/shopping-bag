import React, {useState} from 'react'
import { CardsInCart } from './CardsInCart'
import { CartState } from '../ActionReducer/Context';
import { TYPES } from '../ActionReducer/Types';



const ShoppingCart = () => {

  const{dispatch,state}=CartState();
  const removeAllCart=() =>{dispatch({type:TYPES.CLEAR_CART})};
  const [url, setUrl] = useState("");
  const productosList= state.cart.map((item)=>state.products.find((e)=>e.id===item.id));
console.log(productosList)
const message = () => {
let text = "https://wa.me/573133064826?text="
text += `Bienvenido a Shopping-bag , hemos visto que estas interesado en los siguientes productos: \n\n`
productosList.forEach(product => {
text += `${product.name},\n`
})
text += `\n\nGracias por confiar en nostros, nos podremos en contacto contigo muy pronto para terminar tu compra.\n`
setUrl(encodeURI(text)) }
  return (
    <div>
       <h2>Carrito de compras</h2>
       <h3>productos</h3>
       <h3>Carrito</h3>
       <button onClick={()=> removeAllCart()}>Limpiar el Carrito</button> 
       
       <div className='containerCards'>

       
      {state.cart.map((product) => (
                        <CardsInCart
                        key={product.id}
                        id={product.id}
                        data={state.products.find((e)=>e.id===product.id)}
                        
                        />
    ))}

  </div>
  <a href={url} onClick={message} target="_blank" rel="noreferrer">Continuar</a> 
    </div>
  )
}

export default ShoppingCart