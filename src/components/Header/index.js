import React from "react";
// import "./style.css";

// pass header into main app. Want to pass in props of current score.
function Header() {
  return (
    // <div className="wrapper">{props.children}</div>
    <section className="hero is-medium is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            React Memory Game
          </h1>
          <h2 className="subtitle">
            Every click earns you points, but don't click an image more than once!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Header;
