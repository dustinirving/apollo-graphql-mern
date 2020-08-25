const { gql } = require('apollo-server')

const user = gql`
  extend type Query {
    users: [User!]!
    user: User!
  }

  extend type Mutation {
    createUser(email: String!, password: String!): User!
    login(email: String!, password: String!): User!
  }

  type User {
    _id: ID!
    email: String!
  }
`

module.exports = user
