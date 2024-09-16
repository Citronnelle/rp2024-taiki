import "./App.css";
import React, {useState} from "react";
import Info from "./components/Info";
import Counter from "./components/Counter";
import Show from "./components/Show";

// ☁️🌤️⛅🌥️☀️🌦️🌨️🌩️🌧️

function App() {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(prevShow => !prevShow);

  let nimi = "Taiki-Viia Tungal";

  return (
    <>
      <div className="App-main">
        <Counter />
        <Info nimi={nimi} />
        <Show show={show} toggleShow={toggleShow} />
      </div>
    </>
  )
};

export default App;
