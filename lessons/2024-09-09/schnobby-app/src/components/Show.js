import React from 'react';
import Context from "./Context";
import Name from "./Name";
import PropDrilling from "./PropDrilling";
import RandomName from "./RandomName";

const Show = ({ show, toggleShow }) => {
  return (
    <>
      <div className="App-header">
        Extra content: { show ? <span className="App-emph">Showing</span> : <span className="App-emph">Hiding</span> }
      </div>
      { show &&
        <>
          <PropDrilling />
          <Context />
          <Name name={RandomName()} />
          <Name />
        </>
      }
      <p>
        <button className="App-button App-emph" onClick={toggleShow}>{show ? "Hide" : "Show"}</button>
      </p>
    </>
  )
};

export default Show;