import React from "react";

const Name = ({ name }) => {
  if (name) {
    return <div className="App-div">Hello {name}</div>
  } else {
    return <div className="App-div">Hello World</div>
  }
};

export default Name;
