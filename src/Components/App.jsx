// {}
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;

/* 

Notes on Basic Hooks from Docs

// const [state, setState] = useState(initial State) 

Returns a stateful value, and a function to update it.
During the initial render, the returned state (state) is 
the same as the value passed as the first argument
(initialState).

The setState function is used to update the state. 
It accepts a new state value and enqueues a re-render 
of the component.

// setState(newState)

During subsequent re-renders, the first value 
returned by useState will always be the most 
recent state after applying updates.

*/
