import React, { useState } from "react"
import { Alert, Box, Button, Snackbar, Stack, TextField } from "@mui/material"

type KassiLisamine = { uuendaKassid: () => void }

const SubmitCat = ({ uuendaKassid }: KassiLisamine) => {
  const [nimi, maaraNimi] = useState("")
  const [teateRibaAvatud, lylitaTeateRiba] = useState(false)
  const [teade, maaraTeade] = useState("")
  const [teateTyyp, maaraTeateTyyp] = useState<"success" | "error">("success") // Värvi ja liigi

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

        maaraTeade("Kassi lisamine õnnestus!")
        maaraTeateTyyp("success")
        lylitaTeateRiba(true)

        maaraNimi("")

        uuendaKassid()
      } else {
        console.warn("Ebaõnnestus!")

        maaraTeade("Kassi lisamine ebaõnnestus!")
        maaraTeateTyyp("error")
        lylitaTeateRiba(true)
      }
    } catch (viga) {
      console.warn(viga)

      maaraTeade("Tekkis viga!")
      maaraTeateTyyp("error")
      lylitaTeateRiba(true)
    }
  }

  const tootlePostitust = (event: React.FormEvent) => {
    event.preventDefault()

    sisestaKass()
    setTimeout(uuendaKassid, 100)
  }

  const sulgeTeateRiba = () => {
    lylitaTeateRiba(false)
  }

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Snackbar
          open={teateRibaAvatud}
          autoHideDuration={6000}
          onClose={sulgeTeateRiba}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <Alert
            onClose={sulgeTeateRiba}
            severity={teateTyyp}
            sx={{ width: "100%" }}
          >
            {teade}
          </Alert>
        </Snackbar>
        <form onSubmit={tootlePostitust}>
          <Stack>
            <TextField
              label="Kassi nimi"
              value={nimi}
              onChange={event => maaraNimi(event.target.value)}
            ></TextField>
            <Button
              type="submit"
              disabled={!nimi}
            >
              Lisa
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default SubmitCat
