const cats = ["Timoša", "Rõzik", "Benji", "Puuk", "Miisu", "Mjäu"]

exports.create = (req, res) => {
  // res.send(req.params)
  res.send(req.body)
}

exports.read = (req, res) => {
  res.send("OK")
}

exports.update = (req, res) => {}

exports.delete = (req, res) => {}
