import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    isClicked ? setClicked(false) : setClicked(true);
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}

export default ToDoItem;
