import React, { useState } from "react"
import { Button } from "@mui/material"
import NotificationSnackbar from "./NotificationSnackbar"
import { Cat } from "./Cats"

type KassiEemaldamine = {
  uuendaKassid: () => void
  eemaldatavKass: Cat | null
}

const RemoveCat = ({ uuendaKassid, eemaldatavKass }: KassiEemaldamine) => {
  const [teateRibaAvatud, lylitaTeateRiba] = useState(false)
  const [teade, maaraTeade] = useState("")
  const [teateTyyp, maaraTeateTyyp] = useState<"success" | "error">("success")

  const kustutaKass = async () => {
    try {
      const response = await fetch("http://localhost:8080/cats", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: eemaldatavKass ? eemaldatavKass.id : undefined,
        }),
      })

      if (response.ok) {
        console.log("Õnnestus!", response)

        maaraTeade("Kassi eemaldamine õnnestus!")
        maaraTeateTyyp("success")
        lylitaTeateRiba(true)

        uuendaKassid()
      } else {
        console.warn("Ebaõnnestus!")

        maaraTeade("Kassi eemaldamine ebaõnnestus!")
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

  const eemaldaKass = (event: React.FormEvent) => {
    event.preventDefault()

    kustutaKass()
    setTimeout(uuendaKassid, 100)
  }

  const sulgeTeateRiba = () => {
    lylitaTeateRiba(false)
  }

  return (
    <>
      <NotificationSnackbar
        teateRibaAvatud={teateRibaAvatud}
        teade={teade}
        teateTyyp={teateTyyp}
        onClose={sulgeTeateRiba}
      />
      <Button
        onClick={eemaldaKass}
        color="error"
      >
        Eemalda
      </Button>
    </>
  )
}

export default RemoveCat
