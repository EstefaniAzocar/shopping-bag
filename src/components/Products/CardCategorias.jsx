import './Products.css';
export function Cards (props) {
    const {img, name, }  = props
    return (
        <div className="productCard">
            <div className="productImage">
                <img src= {img} alt={'img'+name} />
                </div>
        <div className="productInfo">
            <h1 className="Namecard">{name}</h1>
         </div>
        {/* <button onClick={()=> addToCart(id)}>Agregar a el Carrito</button> */}
        </div> 
    )
}