const todoRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now())
  next()
}

const todoGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware")
  next()
}

//TODO: Add validation and/or logging?

module.exports = { todoRouteMiddleware, todoGetRouteMiddleware }
