// {}
import React, { useState } from "react";

function App() {
  const [fName, setFirstName] = useState("");
  const [lName, setLastName] = useState("");

  function updateFName(event) {
    const firstName = event.target.value;
    setFirstName(firstName);
  }

  function updateLName(event) {
    const lastName = event.target.value;
    setLastName(lastName);
  }

  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <form>
        <input
          onChange={updateFName}
          name="fName"
          placeholder="First Name"
          value={fName}
        />
        <input
          onChange={updateLName}
          name="lName"
          placeholder="Last Name"
          value={lName}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
