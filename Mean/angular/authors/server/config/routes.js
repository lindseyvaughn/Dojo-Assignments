const authors = require("../controller/authors.js");
const path = require('path')

module.exports = function (app) {
  console.log("INSIDE ROUTES")
  app.get("/authors_json", authors.index)

  app.post("/authors_json", authors.addAuthor)

  app.get("/authors_json/:id", authors.getAuthor)

  // app.post("/authors_json/:id", authors.newAuthor)

  app.put("/authors_json/:id", authors.updatedAuthor)

  app.delete("/authors_json/:id", authors.deleteAuthor)
  
}
