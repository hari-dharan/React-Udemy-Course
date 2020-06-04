import React from "react";
import Contacts from "./Contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card {...Contacts[0]} />
      <Card {...Contacts[1]} />
      <Card {...Contacts[2]} />
    </div>
  );
}

export default App;
