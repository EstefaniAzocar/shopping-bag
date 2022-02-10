import React from "react";
import { Link, Outlet } from "react-router-dom";
import './Products.css';

export function Products() {

    return(
        <div>
            <h1 className="Title-categories">Productos</h1>
            <div className="Section-Categories">
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Tulas"></img>
              <Link to="/products/Tulas"> Tulas </Link>
            </div>
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Gorras"></img>
              <Link to="/products/Gorras">Gorras</Link>
            </div>
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Camisetas"></img>
              <Link to="/products/Camisetas">Camisetas</Link>
            </div>
            <div className="Self-Categories">
              <img src="https://drive.google.com/uc?export=download&id=1HIuDtaLbrZI2PcjHKDzecnJvsHqAtsNq" alt="Paraguas"></img>
              <Link to="/products/">Paraguas</Link>
            </div>
            <Outlet/>
        </div>
        </div>
    );
}