import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        // This is so that the onChecked method is only called when it is onClicked first
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>;
    </div>
  );
}

export default ToDoItem;
