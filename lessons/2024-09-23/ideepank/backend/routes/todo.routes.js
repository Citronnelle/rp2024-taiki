const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares")

router.use(todoRouteMiddleware)

// /todo/ Get endpoint level middleware
router.get("/", todoGetRouteMiddleware, todoController.read)
router.post("/", todoController.create)
router.put("/", todoController.update)
router.delete("/", todoController.delete)

module.exports = router
