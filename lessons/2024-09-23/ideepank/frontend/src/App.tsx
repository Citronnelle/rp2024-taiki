import React from "react"
import "./App.css"
import { Box } from "@mui/material"
import Cats from "./components/Cats"
import Todos from "./components/Todos"

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
    </>
  )
}

export default App
