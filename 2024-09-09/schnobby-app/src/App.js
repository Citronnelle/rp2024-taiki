import "./App.css"
import React, {useState} from "react"
import Name from "./components/Name"
import Counter from "./components/Counter"
import RandomName from "./components/RandomName"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"

/*
function App() {
  return <div className="App-header">
    <Name name="Mari" />
    <Name />
  </React.Fragment>
}
 */

/*
function App() {
  return <React.Fragment>
    <Name name="Mari" />
    <Name />
  </React.Fragment>
}
 */

/*
function App() {
  return <>
    <Name name="Raaa" />
    <Name />
    <Counter />
  </>
}
 */

/*
function App() {
  return (
    <>
      <div className="App-header">
        <Show />
        <PropDrilling />
        <Counter />
        <Name name={RandomName()} />
        <Name />
      </div>
    </>
  )
}
 */

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(prevShow => !prevShow);

  return (
    <>
      <div className="App-header">
        <Context />
        <Show show={show} toggleShow={toggleShow} />
        <PropDrilling />
        <Counter />
        <Name name={RandomName()} />
        <Name />
      </div>
    </>
  )
}

export default App;
