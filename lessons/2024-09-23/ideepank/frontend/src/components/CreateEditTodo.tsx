import React, { useState } from "react"
import { Box, Button, Stack, TextField } from "@mui/material"
import NotificationSnackbar from "./NotificationSnackbar"
import { Todo } from "./Todos"

type TodoCreationEditing = {
  getTodos: () => void
  todoTitle: string
  todoPriority: number
  editableTodo: Todo | null
  setTodoTitle: (value: string) => void
  setTodoPriority: (value: number) => void
  setEditableTodo: (value: Todo | null) => void
}

const CreateEditTodo = ({
  getTodos,
  todoTitle,
  todoPriority,
  editableTodo,
  setTodoTitle,
  setTodoPriority,
  setEditableTodo,
}: TodoCreationEditing) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<"success" | "error">("success")

  const createOrEditTodoProcess = async () => {
    try {
      const method = editableTodo ? "PUT" : "POST"
      const response = await fetch("http://localhost:8080/todo", {
        method: method,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: editableTodo?.id ? editableTodo.id : undefined,
          title: todoTitle,
          priority: todoPriority,
        }),
      })

      if (response.ok) {
        console.log("Õnnestus!", response)

        setMessage(`Kirje ${editableTodo ? `muutmine` : `lisamine`} õnnestus!`)
        setSeverity("success")
        setSnackbarOpen(true)

        setTodoTitle("")
        setTodoPriority(0)

        if (editableTodo) {
          setEditableTodo(null)
        }

        getTodos()
      } else {
        console.warn("Ebaõnnestus!")

        setMessage(
          `Kirje  ${editableTodo ? `muutmine` : `lisamine`}  ebaõnnestus!`,
        )
        setSeverity("error")
        setSnackbarOpen(true)
      }
    } catch (viga) {
      console.warn(viga)

      setMessage("Tekkis viga!")
      setSeverity("error")
      setSnackbarOpen(true)
    }
  }

  const createEditTodoEvent = (event: React.FormEvent) => {
    event.preventDefault()

    createOrEditTodoProcess()
    setTimeout(getTodos, 100)
  }

  const closeSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <NotificationSnackbar
          teateRibaAvatud={snackbarOpen}
          teade={message}
          teateTyyp={severity}
          onClose={closeSnackbar}
        />
        <form onSubmit={createEditTodoEvent}>
          <Stack gap={2}>
            <TextField
              label="Pealkiri"
              value={todoTitle}
              onChange={event => setTodoTitle(event.target.value)}
            ></TextField>
            <TextField
              label="Prioriteet"
              type="number"
              value={todoPriority}
              onChange={event => setTodoPriority(parseInt(event.target.value))}
            ></TextField>
            <Button
              type="submit"
              disabled={!todoTitle || !todoPriority || todoPriority === 0}
            >
              {editableTodo ? "Muuda" : "Lisa"}
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default CreateEditTodo
