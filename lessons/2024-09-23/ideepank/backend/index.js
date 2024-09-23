const express = require("express")
const app = express()
const port = 8080

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
