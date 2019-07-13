import React from "react";
import "./style.css";

// pass header into main app. Want to pass in props of current score.
function Scorecard(props) {
  return (
    // <div className="wrapper">{props.children}</div>
    <section>
      <div className="container">
        <div className="column scorecard has-text-centered">
          <h1>Score: {props.score}</h1>
        </div>
      </div>
    </section>
  )
}

export default Scorecard;