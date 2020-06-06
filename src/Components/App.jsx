// {}
import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [isMousedOver, setButtonColor] = useState(false);
  const [name, setName] = useState("");

  function handleClick() {
    setHeading(name);
  }

  function handleMouseOver() {
    setButtonColor(true);
  }

  function handleMouseOut() {
    setButtonColor(false);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {heading}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
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
