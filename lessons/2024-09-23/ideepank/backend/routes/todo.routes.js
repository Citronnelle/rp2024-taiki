const express = require("express")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
const tokensController = require("../controllers/tokens.controller")
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares")

router.use(todoRouteMiddleware)

router.get("/", todoGetRouteMiddleware, todoController.read)
router.post("/", todoController.create)
router.put("/", todoController.update)
router.delete("/", todoController.delete)

router.get("/getToken", tokensController.getToken)
router.post("/verifyToken", tokensController.verifyToken)

module.exports = router
