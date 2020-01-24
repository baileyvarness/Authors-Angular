const mongoose = require("mongoose")
const Author = mongoose.model("Author")

module.exports = {
  index(req, res) {
    Author.find()
      .then(authors => {
        // res.json({ authors })
        res.json({ authors: authors })
      })
      .catch(err => res.json({ errors: err }))
  },
  create(req, res) {
    console.log(req.body)
    Author.create(req.body)
      .then(newAuthor => {
        // res.json({ author })
        res.json({ author: newAuthor })
      })
      .catch(err => res.json({ errors: err }))
  },
  getOneAuthor(req, res) {
    console.log(req.params.authorId)
    Author.findById(req.params.authorId)
      .then(author => {
        console.log("author: ", author)
        res.json({ author: author })
      })
      .catch(err => res.json({ errors: err }))
  },
  delete(req, res) {
    console.log(req.params.authorId)
    Author.findByIdAndDelete(req.params.authorId)
      .then(deletedAuthor => {
        console.log("deletedAuthor: ", deletedAuthor)
        res.json({ author: deletedAuthor })
      })
      .catch(err => res.json({ errors: err }))
  },
  update(req, res) {
    console.log(req.params.authorId)
    console.log("req.body", req.body)
    Author.findByIdAndUpdate(req.params.authorId, req.body, {
      runValidators: true
    })
      .then(updatedAuthor => {
        console.log("updatedAuthor: ", updatedAuthor)
        res.json({ author: updatedAuthor })
      })
      .catch(err => res.json({ errors: err }))
  }
}