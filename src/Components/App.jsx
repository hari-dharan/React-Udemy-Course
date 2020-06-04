import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card {...contacts[0]} />
      <Card {...contacts[1]} />
      <Card {...contacts[2]} />
    </div>
  );
}

export default App;
