import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

export function NavBar(){

    return (
        <ul className="Nav">
        <Link to="/"><img src="https://drive.google.com/uc?export=download&id=119eJ3ZYg0Yo4GPAVzYJOB5P1RrKiymGe" alt="logo"/></Link>
        <Link to="/quienes-somos">Quienes Somos</Link>
        <Link to="/products">Productos</Link>
        <Link to="/cotizacion">Cotizacion</Link>
        </ul>
    );
}