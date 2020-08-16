import React, { useEffect } from 'react'
import Form from '../components/Form'
import { useQuery, gql } from '@apollo/client'
import { connect } from 'react-redux'
import { getPosts } from '../actions/postActions'

const POSTS = gql`
  query PostsQuery {
    posts {
      _id
      title
      body
    }
  }
`

// { getPosts, posts }

const Home = ({ getPosts, posts }) => {
  const { loading, error, data } = useQuery(POSTS)

  useEffect(() => {
    getPosts()
  }, [])

  //   <div>
  //   <h1>This is the Home Page</h1>
  //   {!loading ? (
  //     data.posts.map(post => (
  //       <>
  //         <div>ID: {post._id}</div>
  //         <div>Title: {post.title}</div>
  //         <div>Body: {post.body}</div>
  //         <br />
  //       </>
  //     ))
  //   ) : (
  //     <div />
  //   )}
  // </div>
  // <Form />

  return (
    <>
      {posts.posts.map(post => (
        <>
          <div>ID: {post._id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
          <br />
        </>
      ))}
      <Form />
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { getPosts })(Home)
