const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")

router.get("/", (req, res) => {
  const token = jwt.sign(
    { nimi: "Taiki", roll: "super-user" },
    "VägaSalajaneParool",
  )
  res.send(token)
})

const postMiddleware = (req, res, next) => {
  console.log("Vastus tuleb järgmisest meetodist...")
  next()
}

router.post("/", postMiddleware, (req, res) => {
  const { token } = req.body

  jwt.verify(token, "VägaSalajaneParool", function (viga, sisu) {
    if (viga) return res.send(false)
    console.log(sisu)
    res.send(true)
  })
})

module.exports = router
