import React, { useEffect, useState } from "react"
import { Box, List, ListItem, Typography } from "@mui/material"
import SubmitCat from "./SubmitCat"

type Cat = {
  id: string
  name: string
  createdAt: number
  updatedAt: number | null
  deleted: boolean
}

const Cats = () => {
  const [kassid, maaraKassid] = useState<Cat[]>([])

  const fetchCats = async () => {
    const response = await fetch("http://localhost:8080/cats")
    const data = await response.json()

    maaraKassid(data)
  }

  useEffect(() => {
    fetchCats()
  }, [])

  return (
    <Box>
      <Typography variant="h3">Registreeritud kassid</Typography>
      <List>
        {kassid.map(kass => (
          <ListItem key={kass.id}>{JSON.stringify(kass)}</ListItem>
        ))}
      </List>
      <SubmitCat fetchCats={fetchCats} />
    </Box>
  )
}

export default Cats