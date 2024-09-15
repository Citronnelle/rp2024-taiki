import React from 'react';

const Show = ({ show, toggleShow }) => {
  return (
    <>
        <h1>Show</h1>
        { show ? <p>Showing</p> : <p>Hiding</p> }
        { show && <p>Showing again</p> }
        <button onClick={toggleShow}>{ show ? "Hide" : "Show" }</button>
    </>
  )
}

export default Show;