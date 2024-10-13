import React, { useState, useEffect } from "react"
import Cleanup from "./Cleanup"
import { Button } from "@mui/material"

const EventListener = () => {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <Cleanup />}
      <Button
        variant="contained"
        onClick={() => setShow(!show)}
      >
        Lülita
      </Button>
    </>
  )
}

export default EventListener
