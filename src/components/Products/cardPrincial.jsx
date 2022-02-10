import React from 'react';
import { Categorias } from './Data/Categorias';
import { Cards } from './CardCategorias';
import './Products.css'

export const Productscard = () => {
  const url = window.location.href.split('/').reverse()[0]
  const products = Categorias[url]
  

  return (
  <div className='containerCards'>
    {products.productos.map((productos) => (
                        <Cards
                        key={productos.id}
                        name={productos.name}
                        img={productos.img}
                        />
    ))}

  </div>
  )
};