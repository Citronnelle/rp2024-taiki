const express = require("express")
const cors = require("cors")
const app = express()
const port = 8080

app.use(cors())

const catsRoutes = require("./routes/cats.routes")
const exampleRoutes = require("./routes/example.routes")

app.use(express.json())

app.use("/cats", catsRoutes)
app.use("/examples", exampleRoutes)

app.get("/", (req, res) => {
  res.send("Tere, maailm!")
})

app.listen(port, () => {
  console.log(`Kuulab porti ${port}`)
})
