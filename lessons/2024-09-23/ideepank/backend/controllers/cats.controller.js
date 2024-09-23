const cats = [
  {
    id: 1,
    name: "Timoša",
    createdAt: new Date(2024, 2, 2),
    updatedAt: new Date(2024, 8, 8),
    deleted: true,
  },
  {
    id: 2,
    name: "Rõzik",
    createdAt: new Date(2024, 8, 9),
    updatedAt: new Date(2024, 9, 9),
    deleted: false,
  },
  {
    id: 3,
    name: "Benji",
    createdAt: new Date(2024, 9, 10),
    updatedAt: null,
    deleted: false,
  },
]

exports.create = (req, res) => {
  const { name } = req.body

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  }

  cats.push(newCat)

  res.send(
    `Lisati uus kass: ${newCat.name}!
    Lisamise aeg: ${new Date(newCat.createdAt).toLocaleDateString()} `,
  )
}

exports.read = (req, res) => {
  res.send(`Registreeritud kassid:
    ${cats.map(c => c.name).join(", ")}`)
}

exports.update = (req, res) => {
  const { id, name } = req.body

  let indeks = cats.findIndex(i => i.id == id)

  if (indeks) {
    let eelminenimi = cats[indeks]?.name
    cats[indeks] = {
      ...cats,
      name: name,
      updatedAt: Date.now(),
    }

    res.send(`Kassi nimi muudetud!
        Nimi enne: ${eelminenimi}
        Nimi nüüd: ${cats[indeks].name}
        Muutmise aeg: ${new Date(cats[indeks].updatedAt).toLocaleDateString()}`)
  } else {
    res.send(`Kassi ei leitud!`)
  }
}

exports.delete = (req, res) => {
  const { id } = req.body

  let indeks = cats.findIndex(i => i.id == id)

  if (indeks) {
    let nimi = cats[indeks]?.name
    cats[indeks] = {
      ...cats,
      deleted: true,
    }

    res.send(`Kassi ${nimi} andmed kustutatud!`)
  } else {
    res.send(`Kassi ei leitud!`)
  }
}
