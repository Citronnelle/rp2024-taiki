import React from "react"
import "./App.css"
import { Box, createTheme, ThemeProvider } from "@mui/material"
import { blue, cyan, green, purple, red, yellow } from "@mui/material/colors"
import Cats from "./components/Cats"
import Todos from "./components/Todos"
//import EventListener from "./components/EventListener"

const theme = createTheme({
  palette: {
    primary: { main: purple[700] },
    secondary: { main: purple[400] },
    info: { main: blue[700] },
    success: { main: green[700] },
    warning: { main: yellow[700] },
    error: { main: red[700] },
  },
})

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </>
  )
}

export default App
