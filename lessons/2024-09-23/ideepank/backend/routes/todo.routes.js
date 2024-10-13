const express = require("express")
const { body, validationResult } = require("express-validator")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
const tokensController = require("../controllers/tokens.controller")
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares")

router.use(todoRouteMiddleware)
router.use(express.json())

router.get("/", todoGetRouteMiddleware, todoController.read)
router.post("/", todoRouteMiddleware, todoController.create)
router.put("/", todoController.update)
router.delete("/", todoController.delete)

router.get("/getToken", body("nimi").notEmpty().escape(), (req, res) => {
  const tulem = validationResult(req)
  if (!tulem.isEmpty()) return res.status(400).json({ vead: tulem.array() })
  else tokensController.getToken(req, res)
})

router.post("/verifyToken", body("token").notEmpty().escape(), (req, res) => {
  const tulem = validationResult(req)
  if (!tulem.isEmpty()) return res.status(400).json({ vead: tulem.array() })
  else tokensController.verifyToken(req, res)
})

module.exports = router
