import React, { Component } from 'react';
import "./style.css";

function handleClick (event) {
    console.log("this is working")
}

function Card(props) {
    return (
        <div>
            <img className="cardstyle" onClick={handleClick} data-id= {props.id} alt={props.name} src={props.image} />
        </div> 
    )
}

export default Card
