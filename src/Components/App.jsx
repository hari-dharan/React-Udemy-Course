// {}
import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

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

  function deleteItem(id) {
    setItemList(lastValue => {
      return lastValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        handleClick={handleClick}
        handleChange={handleChange}
        item={item}
      />
      <div>
        <ul>
          {itemList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              item={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
