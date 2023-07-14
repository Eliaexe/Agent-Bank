import React from "react";

function uppercaseFirst(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1);
}

function Greetings(props) {
  let name = uppercaseFirst(props.name)
  const lastName = uppercaseFirst(props.lastName)
  return (
    <div className="header">
      <h1>Welcome back {name} {lastName}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default Greetings;
