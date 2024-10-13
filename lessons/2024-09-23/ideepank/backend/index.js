const express = require("express")
const cors = require("cors")
const app = express()
const morgan = require("morgan")
const port = 8080

app.use(cors())
app.use(morgan("dev"))

const catsRoutes = require("./routes/cats.routes")
const todoRoutes = require("./routes/todo.routes")
const exampleRoutes = require("./routes/example.routes")
const jwtRoutes = require("./routes/jwt.routes")

app.use(express.json())

app.use("/cats", catsRoutes)
app.use("/todo", todoRoutes)
app.use("/examples", exampleRoutes)
app.use("/jwt", jwtRoutes)

app.get("/", (req, res) => {
  res.send("Tere, maailm!")
})

app.listen(port, () => {
  console.log(`Kuulab porti ${port}`)
})
