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

  const newCat = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  }

  cats.push(newCat)

  res.send(newCat)

  /*
  res.send(
    `Lisati uus kass: ${newCat.name}!
    Lisamise aeg: ${new Date(newCat.createdAt).toLocaleDateString()} `,
  ) 
    */
}

exports.read = (req, res) => {
  //res.send(`Registreeritud kassid: ${cats.map(cat => <li>{JSON.stringify(cat)}</li>)}`)
  res.send(cats)
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

    res.send(cats[indeks])

    /* 
    res.send(`Kassi nimi muudetud!
        Nimi enne: ${eelminenimi}
        Nimi nüüd: ${cats[indeks].name}
        Muutmise aeg: ${new Date(cats[indeks].updatedAt).toLocaleDateString()}`) 
        */
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

    res.send(cats[indeks])
    //res.send(`Kassi ${nimi} andmed kustutatud!`)
  } else {
    res.send(`Kassi ei leitud!`)
  }
}
