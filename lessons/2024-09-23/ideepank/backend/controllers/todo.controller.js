const todos = [
  {
    id: "c294cc8b-a2ec-4b9f-b0a3-8186f2429e0a",
    title: "Esimene",
    priority: 1,
    createdAt: 1727567213672,
    updatedAt: 1727567215677,
    deleted: true,
  },
  {
    id: "05c76445-c3e6-485c-a786-d3f220133e98",
    title: "Teine",
    priority: 2,
    createdAt: 1727567215677,
    updatedAt: 1727567217960,
    deleted: false,
  },
  {
    id: "850591d8-a6e8-47a2-aca8-e43bb0e8516c",
    title: "Viimane",
    priority: 999,
    createdAt: 1727567217960,
    updatedAt: null,
    deleted: false,
  },
]

exports.create = (req, res) => {
  const { title, priority } = req.body

  if (!title || !priority || priority === 0) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  const newTodo = {
    id: crypto.randomUUID(),
    title: title,
    priority: priority,
    createdAt: Date.now(),
    updatedAt: null,
    deleted: false,
  }

  todos.push(newTodo)

  res.send(newTodo)
}

exports.read = (req, res) => {
  res.send(todos.filter(t => !t.deleted))
}

exports.update = (req, res) => {
  const { id, title, priority } = req.body

  if (!id || !title || !priority || priority === 0) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  let indeks = todos.findIndex(i => i.id === id)

  if (indeks !== -1) {
    todos[indeks] = {
      ...todos[indeks],
      title: title,
      priority: priority,
      updatedAt: Date.now(),
    }

    return res.send(todos[indeks])
  }

  res.status(404).json({ viga: "Kirjet ei leitud!" })
}

exports.delete = (req, res) => {
  const { id } = req.body

  if (!id) {
    return res.status(400).json({ viga: "Vigane sisend!" })
  }

  let indeks = todos.findIndex(i => i.id === id)

  if (indeks !== -1) {
    todos[indeks] = {
      ...todos[indeks],
      deleted: true,
    }

    return res.send(todos[indeks])
  }

  res.status(404).json({ viga: "Kirjet ei leitud!" })
}
