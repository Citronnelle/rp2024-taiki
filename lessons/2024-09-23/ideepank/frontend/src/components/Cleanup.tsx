import React, { useEffect } from "react"
import { Box } from "@mui/material"

const Cleanup = () => {
  const clickEvent = (event: any) => {
    console.log({ c: event.x, y: event.y })
  }

  useEffect(() => {
    document.addEventListener("click", clickEvent)

    return () => document.removeEventListener("click", clickEvent)
  }, [])

  return <Box>Klõpsa</Box>
}

export default Cleanup
