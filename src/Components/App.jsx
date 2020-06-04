import React from "react";
import contacts from "../contacts";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      name={contact.name}
      imgURL={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
