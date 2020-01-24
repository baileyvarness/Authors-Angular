// controller
const authorsController = require("../controllers/authors")

// export our function that defines our routes
module.exports = function(app) {
  app.get("/api/authors", authorsController.index)
  app.post("/api/authors", authorsController.create)
  app.get("/api/authors/:authorId", authorsController.getOneAuthor)
  app.delete("/api/authors/:authorId", authorsController.delete)
  app.put("/api/authors/:authorId", authorsController.update)
}