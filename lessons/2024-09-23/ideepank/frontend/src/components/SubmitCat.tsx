import React, { useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"
import NotificationSnackbar from "./NotificationSnackbar"
import { Cat } from "./Cats"

type KassiLisamineMuutmine = {
  uuendaKassid: () => void
  kassiNimi: string
  maaraKassiNimi: (value: string) => void
  muudetavKass: Cat | null
  maaraMuudetavKass: (value: Cat | null) => void
}

const SubmitCat = ({
  uuendaKassid,
  kassiNimi,
  maaraKassiNimi,
  muudetavKass,
  maaraMuudetavKass,
}: KassiLisamineMuutmine) => {
  const [teateRibaAvatud, lylitaTeateRiba] = useState(false)
  const [teade, maaraTeade] = useState("")
  const [teateTyyp, maaraTeateTyyp] = useState<"success" | "error">("success")

  const sisestaVoiMuudaKass = async () => {
    try {
      const meetod = muudetavKass ? "PUT" : "POST"
      const response = await fetch("http://localhost:8080/cats", {
        method: meetod,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: muudetavKass ? muudetavKass.id : undefined,
          nimi: kassiNimi,
        }),
      })

      if (response.ok) {
        console.log("Õnnestus!", response)

        maaraTeade(`Kassi ${muudetavKass ? `muutmine` : `lisamine`} õnnestus!`)
        maaraTeateTyyp("success")
        lylitaTeateRiba(true)

        maaraKassiNimi("")

        if (muudetavKass) {
          maaraMuudetavKass(null)
        }

        uuendaKassid()
      } else {
        console.warn("Ebaõnnestus!")

        maaraTeade(
          `Kassi  ${muudetavKass ? `muutmine` : `lisamine`}  ebaõnnestus!`,
        )
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

  const lisaVoiMuudaKass = async (event: React.FormEvent) => {
    event.preventDefault()

    await sisestaVoiMuudaKass()
    uuendaKassid()
    //setTimeout(uuendaKassid, 100)
  }

  const sulgeTeateRiba = () => {
    lylitaTeateRiba(false)
  }

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NotificationSnackbar
          teateRibaAvatud={teateRibaAvatud}
          teade={teade}
          teateTyyp={teateTyyp}
          onClose={sulgeTeateRiba}
        />
        <form onSubmit={lisaVoiMuudaKass}>
          <Stack gap={2}>
            <TextField
              label="Kassi nimi"
              value={kassiNimi}
              onChange={event => maaraKassiNimi(event.target.value)}
            ></TextField>
            <Button
              type="submit"
              disabled={!kassiNimi}
            >
              {muudetavKass ? "Muuda" : "Lisa"}
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default SubmitCat
