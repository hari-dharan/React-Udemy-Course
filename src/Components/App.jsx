// {}
import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [itemList, setItemList] = useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function handleClick() {
    setItemList(lastValue => {
      return [...lastValue, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
