// rafce
import React, { useState } from "react";

/*
const Counter = () => {
  const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = React.useState(0);

  return (
    <>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
}
 */

/*
const Counter = () => {
    const [counter, setCounter] = useState(0);

    const modifyCounter = () => setCounter(counter + 1);

    return (
      <>
          <h1>{counter}</h1>
          <p>
            <button onClick={modifyCounter}>+1</button>
          </p>
          <p>
            <button onClick={() => setTimeout(() => modifyCounter(), 2000)}>async +1</button>
          </p>
      </>
    );
}
 */

/*
const Counter = () => {
  const [counter, setCounter] = useState(0)

  const modifyCounter = () => setCounter(prevCounter => prevCounter + 1)

  return (
    <>
      <h1>{counter}</h1>
      <div>
        <button onClick={modifyCounter}>+1</button>
      </div>
      <div>
        <button onClick={() => setTimeout(() => modifyCounter(), 2000)}>
          async +1
        </button>
      </div>
    </>
  )
}
 */

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const modifyCounter = (nr) => setCounter(prevCounter => prevCounter + nr);

  return (
    <>
      <h1>{counter}</h1>

      <p>
        {[+1, +5, +50, -1, -5, -50].map(element => (
          <button onClick={() => modifyCounter(element)}>sync {element}</button>
        ))}
      </p>
      <p>
        <button onClick={() => setTimeout(() => modifyCounter(1), 2000)}>async +1</button>
      </p>
    </>
  )
}

export default Counter;
