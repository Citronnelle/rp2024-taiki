const catsRouteMiddleware = (req, res, next) => {
  console.log("Time: ", Date.now())
  next()
}

const catsGetRouteMiddleware = (req, res, next) => {
  console.log("GET middleware")
  next()
}

//TODO: Add validation and/or logging?

module.exports = { catsRouteMiddleware, catsGetRouteMiddleware }
