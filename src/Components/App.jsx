// {}
import React, { useState } from "react";

function App() {
  const [heading, setHeading] = useState("");
  const [isMousedOver, setButtonColor] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    setHeading(name);
    event.preventDefault();
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
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          type="submit"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
