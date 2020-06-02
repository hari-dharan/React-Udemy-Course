import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <img
        className="food-img"
        alt="bacon"
        src="https://storage.googleapis.com/gen-atmedia/3/2010/02/55cc6ae010585eb7933c5f96dea94f637330cff4.jpeg"
      />
      <li>Jamon</li>
      <img
        className="food-img"
        alt="jamon"
        src="https://www.otiendas.com/wp-content/uploads/2017/10/Jamon-serrano.jpg"
      />
      <li>Noodles</li>
      <img
        className="food-img"
        alt="noodles"
        src="https://www.seriouseats.com/recipes/images/2015/05/20150424-singapore-noodles-shao-zhong-20-1500x1125.jpg"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
