import React, { useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { getPosts } from '../store/actions/postActions'
import { getUser } from '../store/actions/userActions'
import Loader from 'react-loader-spinner'
// import { useQuery, gql } from '@apollo/client'

// const POSTS = gql`
//   query PostsQuery {
//     posts {
//       _id
//       title
//       body
//     }
//   }
// `

// { getPosts, posts }

const Home = ({ getPosts, posts, getUser, user, userFetched }) => {
  // const { loading, error, data } = useQuery(POSTS)

  useEffect(() => {
    getUser()
    getPosts()
  }, [])

  return (
    <>
      {!userFetched ? <div>loading...</div> : user ? <>{posts.map(post => (
        <>
          <div>ID: {post._id}</div>
          <div>Title: {post.title}</div>
          <div>Body: {post.body}</div>
          <br />
        </>
      ))} <Form /></> : <Redirect to='/' />}
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    user: state.users.user,
    userFetched: state.users.userFetched
  }
}

export default connect(mapStateToProps, { getPosts, getUser })(Home)
