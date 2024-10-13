const jwt = require("jsonwebtoken")

exports.getToken = (req, res) => {
  const { nimi } = req.body
  if (!nimi) return res.send(false)

  const token = jwt.sign(
    { nimi: nimi, roll: nimi == "Taiki" ? "peakasutaja" : "tavakasutaja" },
    "VägaSalajaneParool",
  )
  res.send(token)
}

exports.verifyToken = (req, res) => {
  const { token } = req.body
  if (!token) return res.send(false)

  jwt.verify(token, "VägaSalajaneParool", function (viga, sisu) {
    if (viga) return res.send(false)
    console.log(sisu)
    res.send(true)
  })
}
