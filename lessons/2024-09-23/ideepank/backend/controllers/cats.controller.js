const cats = [
  {
    id: "c294cc8b-a2ec-4b9f-b0a3-8186f2429e0a",
    name: "Timoša",
    createdAt: 1727567213672,
    updatedAt: 1727567215677,
    deleted: true,
  },
  {
    id: "05c76445-c3e6-485c-a786-d3f220133e98",
    name: "Rõzik",
    createdAt: 1727567215677,
    updatedAt: 1727567217960,
    deleted: false,
  },
  {
    id: "850591d8-a6e8-47a2-aca8-e43bb0e8516c",
    name: "Benji",
    createdAt: 1727567217960,
    updatedAt: null,
    deleted: false,
  },
]

exports.create = (req, res) => {
  const { nimi } = req.body

  if (!nimi) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  const newCat = {
    id: crypto.randomUUID(),
    name: nimi,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  }

  cats.push(newCat)

  res.send(newCat)
}

exports.read = (req, res) => {
  res.send(cats.filter(c => !c.deleted))
}

exports.update = (req, res) => {
  const { id, nimi } = req.body

  if (!id || !nimi) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  let indeks = cats.findIndex(i => i.id === id)

  if (indeks !== -1) {
    cats[indeks] = {
      ...cats[indeks],
      name: nimi,
      updatedAt: Date.now(),
    }

    return res.send(cats[indeks])
  }

  res.status(404).json({ viga: "Kirjet ei leitud!" })
}

exports.delete = (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  let indeks = cats.findIndex(i => i.id === id)

  if (indeks !== -1) {
    cats[indeks] = {
      ...cats[indeks],
      deleted: true,
    }

    return res.send(cats[indeks])
  }

  res.status(404).json({ viga: "Kirjet ei leitud!" })
}
