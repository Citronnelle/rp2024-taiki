import React from "react"
import "./App.css"
import { Box } from "@mui/material"
import Cats from "./components/Cats"
import Todos from "./components/Todos"
//import EventListener from "./components/EventListener"

function App() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "top",
          flexWrap: "wrap",
        }}
      >
        <Cats />
        <Todos />
      </Box>
      {/* <EventListener /> */}
    </>
  )
}

export default App
