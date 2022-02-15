import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Products.css';

export function Products() {

    return(
        <div>
            <h1 className="Title-categories">Productos</h1>
            <div className="Section-Categories">
            <div className="Self-Categories">
              <Link to="/products/Tulas"><img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Tulas"></img>
             </Link>
              <Link to="/products/Tulas"> Tulas </Link>
            </div>
            <div className="Self-Categories">
              <Link to="/products/Gorras"><img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Gorras"></img></Link>
              <Link to="/products/Gorras">Gorras</Link>
            </div>
            <div className="Self-Categories">
              <Link to="/products/Camisetas"><img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Camisetas"></img></Link>
              <Link to="/products/Camisetas">Camisetas</Link>
            </div>
            <div className="Self-Categories">
              <Link to="/products/Paraguas"><img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Paraguas"></img></Link>
              <Link to="/products/Paraguas">Paraguas</Link>
            </div>
            <Outlet/>
        </div>
        </div>
    );
}