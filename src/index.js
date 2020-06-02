import React from "react";
import ReactDOM from "react-dom";

const fName = "Hari";
const lName = "Dharan";
const luckyNum = 17;

ReactDOM.render(
  <div>
    <h1>
      Hello {fName} {lName}!
    </h1>
    <h1>Hello {fName + " " + lName}!</h1>
    <p>Your lucky number is {luckyNum}</p>
    <p>Your random number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
