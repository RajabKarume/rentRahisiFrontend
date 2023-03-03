import React from "react";
import './Card.css';

function Card({info}){
    return(
        <div className="card-container">
            <div className="h1div">
                <h1>{info}</h1>
            </div>
            <div className="h2div">
                <h2>120</h2>
            </div>
        </div>
    )
}

export default Card