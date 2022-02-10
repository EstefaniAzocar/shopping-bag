import React from "react";
import { Link } from "react-router-dom";
import './Home.css';

export function Home(){

    return (
           <ul className="home">
                <div className="img1">
                    <Link to="/"><img src="https://drive.google.com/uc?export=download&id=1pGqsj58_16Z-nl0b2tAyH7Dar_lWKmWL" alt="tulas"/></Link>
                </div> 
                <div className="img2">
                    <Link to="/"><img src="https://drive.google.com/uc?export=download&id=1hBT06xo9QQFNPiFgixkI9eC4P7Tdb1LD" alt="Gorras"/></Link>
                    <Link to="/"><img src="https://drive.google.com/uc?export=download&id=17PAC1LAVgj86EJWRCSvxOBPaUxZtc-lp" alt="Camisetas"/></Link>
                    <Link to="/"><img src="https://drive.google.com/uc?export=download&id=1EN3pbrU_f4haV6Zh-Kvr04R-KswrjjfG" alt="paraguas"/></Link>
                </div>
           </ul>

    );
}