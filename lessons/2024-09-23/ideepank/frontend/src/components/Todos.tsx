import React, { useEffect, useState } from "react"
import {
  Box,
  Button,
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
  Typography,
} from "@mui/material"
import { blue, green, yellow, red, orange, cyan } from "@mui/material/colors"
import CreateEditTodo from "./CreateEditTodo"
import DeleteTodo from "./DeleteTodo"

const theme = createTheme({
  palette: {
    primary: { main: orange[700] },
    secondary: { main: cyan[500] },
    info: { main: blue[500] },
    success: { main: green[500] },
    warning: { main: yellow[500] },
    error: { main: red[500] },
  },
})

export type Todo = {
  id: string
  title: string
  priority: number
  createdAt: number
  updatedAt: number | null
  deleted: boolean
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const [todoTitle, setTodoTitle] = useState<string>("")
  const [todoPriority, setTodoPriority] = useState<number>(0)
  const [editableTodo, setEditableTodo] = useState<Todo | null>(null)

  const getTodos = async () => {
    const response = await fetch("http://localhost:8080/todo")
    const data = await response.json()

    setTodos(data)
  }

  const editTodo = (todo: Todo) => {
    setEditableTodo(todo)
    setTodoTitle(todo.title)
    setTodoPriority(todo.priority)
  }

  const headerCellStyle = {
    backgroundColor: "lightgrey",
    fontWeight: "bold",
  }

  const centeredCellStyle = {
    textAlign: "center",
  }

  const boldCellStyle = {
    fontWeight: "bold",
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: 2, marginTop: 2, maxWidth: "100%" }}>
        <Box sx={{ maxWidth: "80%", margin: "auto" }}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              variant="h3"
              sx={{ mb: 2 }}
            >
              TODO
            </Typography>
            <Paper sx={{ maxWidth: "100%" }}>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={headerCellStyle}>Pealkiri</TableCell>
                      <TableCell sx={headerCellStyle}>Prioriteet</TableCell>
                      <TableCell sx={headerCellStyle}>Lisatud</TableCell>
                      <TableCell sx={headerCellStyle}>Muudetud</TableCell>
                      <TableCell
                        sx={{ ...headerCellStyle, ...centeredCellStyle }}
                      >
                        Tegevused
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {todos.map(todo => (
                      <TableRow key={todo.id}>
                        <TableCell sx={boldCellStyle}>{todo.title}</TableCell>
                        <TableCell sx={boldCellStyle}>
                          {todo.priority}
                        </TableCell>
                        <TableCell>
                          {new Date(todo.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell>
                          {todo.updatedAt
                            ? new Date(todo.updatedAt).toLocaleString()
                            : new Date(todo.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell sx={centeredCellStyle}>
                          <Button
                            color="secondary"
                            onClick={() => editTodo(todo)}
                          >
                            Muuda
                          </Button>
                          <DeleteTodo
                            getTodos={getTodos}
                            deletableTodo={todo}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Box sx={{ pt: 4 }}>
              <CreateEditTodo
                getTodos={getTodos}
                todoTitle={todoTitle}
                todoPriority={todoPriority}
                editableTodo={editableTodo}
                setTodoTitle={setTodoTitle}
                setTodoPriority={setTodoPriority}
                setEditableTodo={setEditableTodo}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default Todos
