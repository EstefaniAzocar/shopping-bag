import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import {Main} from "./components/Main/Main";
import {Home} from "./components/Home/Home";
import {QuienesSomos} from "./components/Quienes-somos/Quienes-somos"
import {Productscard} from "./components/Products/cardPrincial"
import { PageCategorias } from './components/Products/PageCategorias';
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Context from "./components/ActionReducer/Context"

ReactDOM.render(
  <Context>
      <HashRouter>
    <Routes>
      <Route path='/' element={<Main/>}> 
        <Route path='/' element={<Home/>}/> 
        <Route path='/quienes-somos' element={<QuienesSomos/>}/>
        <Route path='/products' element={<PageCategorias/>}/> 
          <Route path='/products/Tulas' element={<Productscard/>}/>
          <Route path='/products/Gorras' element={<Productscard/>}/>
          <Route path='/products/Camisetas' element={<Productscard/>}/>
          <Route path='/products/Paraguas' element={<Productscard/>}/>
          <Route path="/cotizacion" element={<ShoppingCart />} />
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Route>
    </Routes>
  </HashRouter>
  </Context>
  ,
  document.getElementById('root')
);