// {}
import React, { useState } from "react";

function App() {
  setInterval(getTime, 1000);
  const today = new Date().toLocaleTimeString();
  const [state, setState] = useState(today);

  function getTime() {
    const newToday = new Date().toLocaleTimeString();
    setState(newToday);
  }
  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
