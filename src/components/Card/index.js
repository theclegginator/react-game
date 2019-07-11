import React, { Component } from 'react';
import "./style.css";

// export class Card extends Component {
//     render() {
//         return (
//             <div>
//                 <img src="https://via.placeholder.com/150" alt="placeholder" />
//                 <img alt={props.name} src={props.image} />
//             </div>
//         )
//     }
// }
function Card(props) {
    return (
        <div>
            <img className="cardstyle" dataId= {props.id} alt={props.name} src={props.image} />
        </div> 
    )
}

export default Card
