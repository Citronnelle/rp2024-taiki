const express = require("express")
const router = express.Router()

// Routing
router.get("/ab?cd", (req, res) => {
  res.send("ab?cd")
})

router.get("/ab+cd", (req, res) => {
  res.send("ab+cd")
})

router.get("/ab*cd", (req, res) => {
  res.send("ab*cd")
})

router.get("/ab(cd)?e", (req, res) => {
  res.send("ab(cd)?e")
})

router.get(/a/, (req, res) => {
  res.send("/a/")
})
router.get(/.*fly$/, (req, res) => {
  res.send("/.*fly$/")
})

// Route parameters
router.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params)
})

/*
  router.get("/posts/:postId", (req, res) => {
    res.send(req.params)
  })
    */

router.get("/flights/:from-:to", (req, res) => {
  res.send(req.params)
})

// Middleware
const postMiddleWare = (req, res, next) => {
  console.log("the response will be sent by the next function ...")
  next()
}

const postHandler = (req, res) => {
  res.send(req.params)
}

router.get("/posts/:postId", postMiddleWare, postHandler)

// POST jm
router.post("/posts/:postId", (req, res) => {
  throw new Error("Forbidden")
})

module.exports = router
