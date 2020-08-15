import React from 'react'
import Form from '../components/Form'
import { useQuery, gql } from '@apollo/client'

const posts = gql`
  query {
    posts {
      _id
      title
      body
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(posts)
  return (
    <>
      {console.log(data)}
      <div>
        <h1>This is the Home Page</h1>
        {data ? (
          data.posts.map(post => (
            <>
              <div>ID: {post._id}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
              <br />
            </>
          ))
        ) : (
          <div />
        )}
      </div>
      <Form />
    </>
  )
}

export default Home
