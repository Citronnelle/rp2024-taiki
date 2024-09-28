const cats = [
  {
    id: "c294cc8b-a2ec-4b9f-b0a3-8186f2429e0a",
    name: "Timoša",
    createdAt: new Date(2024, 2, 2),
    updatedAt: new Date(2024, 8, 8),
    deleted: true,
  },
  {
    id: "05c76445-c3e6-485c-a786-d3f220133e98",
    name: "Rõzik",
    createdAt: new Date(2024, 8, 9),
    updatedAt: new Date(2024, 9, 9),
    deleted: false,
  },
  {
    id: "850591d8-a6e8-47a2-aca8-e43bb0e8516c",
    name: "Benji",
    createdAt: new Date(2024, 9, 10),
    updatedAt: null,
    deleted: false,
  },
]

exports.create = (req, res) => {
  const { name } = req.body

  if (!name || name === "") {
    return res.status()
  }

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  }

  cats.push(newCat)

  res.send(newCat)
}

exports.read = (req, res) => {
  res.send(cats)
}

exports.update = (req, res) => {
  const { id, name } = req.body

  if (!id || id === "" || !name || name === "") {
    return res.status()
  }

  let indeks = cats.findIndex(i => i.id == id)

  if (indeks) {
    let eelminenimi = cats[indeks]?.name
    cats[indeks] = {
      ...cats,
      name: name,
      updatedAt: Date.now(),
    }

    res.send(cats[indeks])
  }

  res.send(null)
}

exports.delete = (req, res) => {
  const { id } = req.body

  if (!id || id === "") {
    return res.status()
  }

  let indeks = cats.findIndex(i => i.id == id)

  if (indeks) {
    let nimi = cats[indeks]?.name
    cats[indeks] = {
      ...cats,
      deleted: true,
    }

    res.send(cats[indeks])
  }

  res.send(null)
}
