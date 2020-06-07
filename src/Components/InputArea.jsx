import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" value={props.item} />
      <button onClick={props.handleClick}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
