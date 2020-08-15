// Require mongoose
const mongoose = require('mongoose')

const Schema = mongoose.Schema
// Project Schema consists of name, description, skills and team
// When a user joins the project their ID is added to the teams array and their information can be populated
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const Post = mongoose.model('Post', PostSchema)
// Export the Post model
module.exports = Post
