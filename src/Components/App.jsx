// {}
import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
function App() {
  return (
    <div className="container">{currentTime > 12 ? <h1>Hello</h1> : null}</div>
  );
}

export default App;
