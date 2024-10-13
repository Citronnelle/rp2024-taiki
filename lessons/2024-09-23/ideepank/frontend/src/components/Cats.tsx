import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material"
import { blue, green, purple, red, yellow } from "@mui/material/colors"
import SubmitCat from "./SubmitCat"
import RemoveCat from "./RemoveCat"

export type Cat = {
  id: string
  name: string
  createdAt: number
  updatedAt: number | null
  deleted: boolean
}

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

const Cats = () => {
  const [kassid, maaraKassid] = useState<Cat[]>([])
  const [muudetavKass, maaraMuudetavKass] = useState<Cat | null>(null)
  const [kassiNimi, maaraKassiNimi] = useState<string>("")

  const kysiKassid = async () => {
    const response = await fetch("http://localhost:8080/cats")
    const data = await response.json()

    maaraKassid(data)
  }

  const muudaKassi = (kass: Cat) => {
    maaraMuudetavKass(kass)
    maaraKassiNimi(kass.name)
  }

  const headerCellStyle = {
    backgroundColor: "lightgrey",
    fontWeight: "bold",
  }

  const centeredCellStyle = {
    textAlign: "center",
  }

  const boldCellStyle = {
    fontWeight: "bold",
  }

  useEffect(() => {
    kysiKassid()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 2, marginTop: 2, maxWidth: "100%" }}>
        <Box sx={{ maxWidth: "80%", margin: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 2 }}
            >
              Kassid
            </Typography>
            <Paper sx={{ maxWidth: "100%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={headerCellStyle}>Nimi</TableCell>
                      <TableCell sx={headerCellStyle}>Lisatud</TableCell>
                      <TableCell sx={headerCellStyle}>Muudetud</TableCell>
                      <TableCell
                        sx={{ ...headerCellStyle, ...centeredCellStyle }}
                      >
                        Tegevused
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {kassid.map(kass => (
                      <TableRow key={kass.id}>
                        <TableCell sx={boldCellStyle}>{kass.name}</TableCell>
                        <TableCell>
                          {new Date(kass.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {kass.updatedAt
                            ? new Date(kass.updatedAt).toLocaleString()
                            : new Date(kass.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell sx={centeredCellStyle}>
                          <Button
                            color="secondary"
                            onClick={() => muudaKassi(kass)}
                          >
                            Muuda
                          </Button>
                          <RemoveCat
                            uuendaKassid={kysiKassid}
                            eemaldatavKass={kass}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Box sx={{ pt: 4 }}>
              <SubmitCat
                uuendaKassid={kysiKassid}
                kassiNimi={kassiNimi}
                maaraKassiNimi={maaraKassiNimi}
                muudetavKass={muudetavKass}
                maaraMuudetavKass={maaraMuudetavKass}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Cats