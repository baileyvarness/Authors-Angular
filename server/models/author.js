const mongoose = require("mongoose")

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      minlength: [3, "Name must be at least 3 characters."]
    }
  },
  { timestamps: true }
)

mongoose.model("Author", AuthorSchema)