// {}
import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("Hello");
  const [isMousedOver, setButtonColor] = useState(false);

  function handleClick() {
    setHeading("Submitted");
  }

  function handleMouseOver() {
    setButtonColor(true);
  }

  function handleMouseOut() {
    setButtonColor(false);
  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
