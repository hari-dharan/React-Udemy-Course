// {}
import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const { value, name } = event.target;

    setContact(lastValue => {
      return name === "fName"
        ? { fName: value, lName: lastValue.lName, email: lastValue.email }
        : name === "lName"
        ? { fName: lastValue.fName, lName: value, email: lastValue.email }
        : name === "email"
        ? { fName: lastValue.fName, lName: lastValue.lName, email: value }
        : null;
    });
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          onChange={handleChange}
          name="email"
          placeholder="Email"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
