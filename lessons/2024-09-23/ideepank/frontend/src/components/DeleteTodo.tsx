import React, { useState } from "react"
import { Button } from "@mui/material"
import NotificationSnackbar from "./NotificationSnackbar"
import { Todo } from "./Todos"

type TodoDeletion = {
  getTodos: () => void
  deletableTodo: Todo | null
}

const DeleteTodo = ({ getTodos, deletableTodo }: TodoDeletion) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [severity, setSeverity] = useState<"success" | "error">("success")

  const deleteTodo = async () => {
    try {
      const response = await fetch("http://localhost:8080/todo", {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: deletableTodo ? deletableTodo.id : undefined,
        }),
      })

      if (response.ok) {
        console.log("Õnnestus!", response)

        setMessage("Kirje eemaldamine õnnestus!")
        setSeverity("success")
        setSnackbarOpen(true)

        getTodos()
      } else {
        console.warn("Ebaõnnestus!")

        setMessage("Kirje eemaldamine ebaõnnestus!")
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

  const deleteTodoEvent = (event: React.FormEvent) => {
    event.preventDefault()

    deleteTodo()
    setTimeout(getTodos, 100)
  }

  const closeSnackbar = () => {
    setSnackbarOpen(false)
  }

  return (
    <>
      <NotificationSnackbar
        teateRibaAvatud={snackbarOpen}
        teade={message}
        teateTyyp={severity}
        onClose={closeSnackbar}
      />
      <Button
        onClick={deleteTodoEvent}
        color="error"
      >
        Eemalda
      </Button>
    </>
  )
}

export default DeleteTodo
