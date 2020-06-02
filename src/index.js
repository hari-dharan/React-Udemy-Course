import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  border: "1px solid black",
  fontSize: "20px"
};

customStyle.color = "red";

ReactDOM.render(
  <h1 style={customStyle}>Hello World!</h1>,
  document.getElementById("root")
);
