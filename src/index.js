import React from "react";
import ReactDOM from "react-dom";
import * as pi from "./math";

console.log(pi);

ReactDOM.render(
  <ul>
    <li>{pi.default}</li>
    <li>{pi.doublePi()}</li>
    <li>{pi.triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
