import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Landing from './pages/Landing'
import ProtectedRoute from './utils/ProtectedRoute'

// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   HttpLink,
//   ApolloLink
// } from '@apollo/client'
// import { withClientState } from 'apollo-link-state'

// const cache = new InMemoryCache()

// const stateLink = withClientState({
//   cache,
//   resolvers: {
//     Mutation: {
//       createPost: async (_, { title, body }, { cache }) => {
//         console.log(cache)
//         const data = {
//           post: {
//             title,
//             body,
//             __typename: 'Post'
//           }
//         }
//         console.log('hi')
//         cache.writeData({ data })
//         return data
//       }
//     }
//   }
// })

// const client = new ApolloClient({
//   cache,
//   link: ApolloLink.from([
//     stateLink,
//     new HttpLink({ uri: 'http://localhost:4000' })
//   ])
// })

// const client = new ApolloClient({
//   uri: 'http://localhost:4000',
//   cache
// })

// <ApolloProvider client={client}>
// </ApolloProvider>

function App() {
  return (
    <Router>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route exact path='/home'>
        <Home />
      </Route>
    </Router>
  )
}

export default App
