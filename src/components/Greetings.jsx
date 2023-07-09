import React from "react";

function Greetings(props) {
  return (
    <div className="header">
      <h1>Welcome back {props.name}</h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}

export default Greetings;
