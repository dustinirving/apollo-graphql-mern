import React from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import Home from './pages/Home'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
})

function App () {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  )
}

export default App
