import React from 'react'
import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  ApolloLink
} from '@apollo/client'
import { withClientState } from 'apollo-link-state'
import Home from './pages/Home'

const cache = new InMemoryCache()

console.log(cache)

const stateLink = withClientState({
  cache,
  resolvers: {
    Mutation: {
      createPost: async (_, { title, body }, { cache }) => {
        console.log(cache)
        const data = {
          post: {
            title,
            body,
            __typename: 'Post'
          }
        }
        console.log('hi')
        cache.writeData({ data })
        return data
      }
    }
  }
})

const client = new ApolloClient({
  cache,
  link: ApolloLink.from([
    stateLink,
    new HttpLink({ uri: 'http://localhost:4000' })
  ])
})

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache
// })

function App () {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
