import React, { useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"

type SisestaKassiAndmed = { fetchCats: () => void }

const SubmitCat = ({ fetchCats }: SisestaKassiAndmed) => {
  const [nimi, maaraNimi] = useState("")

  const sisestaKass = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nimi: nimi }),
      })

      if (response.ok) {
        console.log("Õnnestus!", response)

        // Snackbar +
      } else {
        console.warn("Ebaõnnestus!")

        // Snackbar -
      }
    } catch (viga) {
      console.warn(viga)
    }
  }

  const tootlePostitust = (event: React.FormEvent) => {
    event.preventDefault()

    sisestaKass()
    setTimeout(fetchCats, 100)
  }

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <form onSubmit={tootlePostitust}>
        <Stack>
          <TextField
            label="Kassi nimi"
            onChange={event => maaraNimi(event.target.value)}
          ></TextField>
          <Button type="submit">Lisa</Button>
        </Stack>
      </form>
    </Box>
  )
}

export default SubmitCat
