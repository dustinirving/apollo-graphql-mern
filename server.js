const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/postGraphql', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
