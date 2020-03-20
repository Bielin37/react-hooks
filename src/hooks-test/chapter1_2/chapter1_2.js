import React, { useState } from "react";

export default function MyName2() {
  const [name, setName] = useState("");

  const handleChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>My name is {name}</h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
