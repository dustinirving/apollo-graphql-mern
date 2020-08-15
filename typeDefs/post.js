const { gql } = require('apollo-server')

const post = gql`
  extend type Query {
    posts: [Post!]!
  }

  extend type Mutation {
    createPost(title: String!, body: String!): Post!
  }

  type Post {
    _id: ID!
    title: String!
    body: String!
  }
`

module.exports = post
