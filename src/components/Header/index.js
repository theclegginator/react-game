import React from "react";
// import "./style.css";

// pass header into main app. Want to pass in props of current score.
function Header() {
  return (
    // <div className="wrapper">{props.children}</div>
    <section class="hero is-medium is-info is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            React Memory Game
          </h1>
          <h2 class="subtitle">
            Every click earns you points, but don't click an image more than once!
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Header;
