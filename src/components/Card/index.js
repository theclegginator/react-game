import React from 'react';
import "./style.css";

function Card(props) {
    return (
        <div>
            <img className="cardstyle" onClick={() => props.checkGuess(props.id)} data-id= {props.id} alt={props.name} src={props.image} />
        </div> 
    )
}

export default Card