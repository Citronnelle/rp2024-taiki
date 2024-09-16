// rafce
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const modifyCounter = (nr) => setCounter(prevCounter => prevCounter + nr);

  return (
    <>
      <div className="App-header App-emph">{counter}</div>

      <p className="App-paragraph">
        {[+1, +5, +50, -1, -5, -50].map(element => (
          <>
            <button className="App-button" onClick={() => modifyCounter(element)}>sync <span className="App-emph">{(element > 0 && "+") + element}</span></button>
            <span>&nbsp;</span>
          </>
        ))}
      </p>
      <p className="App-paragraph">
        <button className="App-button" onClick={() => setTimeout(() => modifyCounter(1), 2000)}>async <span className="App-emph">+1</span></button>
      </p>
    </>
  )
};

export default Counter;
