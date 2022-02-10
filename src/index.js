import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import {Main} from "./components/Main/Main";
import {Home} from "./components/Home/Home";
import {QuienesSomos} from "./components/Quienes-somos/Quienes-somos"
import {Productscard} from "./components/Products/cardPrincial"
import { PageCategorias } from './components/Products/PageCategorias';
import Cart from "./Components/Cart/Cart.jsx";

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<Main/>}> 
        <Route path='/' element={<Home/>}/> 
        <Route path='/quienes-somos' element={<QuienesSomos/>}/>
        <Route path='/products' element={<PageCategorias/>}/> 
          <Route path='/products/Tulas' element={<Productscard/>}/>
          <Route path='/products/Gorras' element={<Productscard/>}/>
          <Route path='/products/Camisetas' element={<Productscard/>}/>
          <Route path='/products/paraguas' element={<Productscard/>}/>
          <Route path="/carrito" element={<Cart />} />
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Route>
    </Routes>
  </HashRouter>,
  document.getElementById('root')
);