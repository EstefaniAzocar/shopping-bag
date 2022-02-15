import React, {useState} from 'react'
import { CardsInCart } from './CardsInCart'
import { CartState } from '../ActionReducer/Context';
import { TYPES } from '../ActionReducer/Types';
import './ShoppingCart.css'



const ShoppingCart = () => {

  const{dispatch,state}=CartState();
  const removeAllCart=() =>{dispatch({type:TYPES.CLEAR_CART})};
  const [url, setUrl] = useState("");
  const productosList= state.cart.map((item)=>state.products.find((e)=>e.id===item.id));
  const [messageAditional, setMessageAditional]= useState("");
const message = () => {
let text = "https://wa.me/573133064826?text="
text += `Bienvenido a Shopping-bag , hemos visto que estas interesado en los siguientes productos: \n\n`
productosList.forEach(product => {
text += `${product.name},\n`
})
text +=`${messageAditional},\n`
text += `\n\nGracias por confiar en nostros, nos podremos en contacto contigo muy pronto para terminar tu compra.\n`
setUrl(encodeURI(text)) }
  return (
    <div className='CotizaCart'>
       <h2>Cotizacion del Producto</h2>
       
       <div className='containerCards'>

       
      {state.cart.map((product) => (
                        <CardsInCart
                        key={product.id}
                        id={product.id}
                        data={state.products.find((e)=>e.id===product.id)}
                        
                        />
    ))}
      
  </div >
       {
         state.cart.length>0?<button onClick={()=> removeAllCart()}>Limpiar el Carrito</button>:null
       
       }
        {
          state.cart.length>0?<textarea name="producdescripcion" id="" placeholder='Por favor escribir si quiere Cantidad, color y estampado' onChange={(e)=>setMessageAditional(e.target.value)} value={messageAditional}></textarea>:null
        }
          
        {
          state.cart.length>0?<a href={url} onClick={message} target="_blank" rel="noreferrer">Enviar</a>:null
        }
    </div>
  )
}

export default ShoppingCart