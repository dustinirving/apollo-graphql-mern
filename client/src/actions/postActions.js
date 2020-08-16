import { GET_ITEMS, GET_ITEM, CREATE_ITEM, ITEMS_LOADING } from './types'

export const getPosts = () => dispatch => {
  dispatch(setItemsLoading())
  fetch('http://localhost:4000/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
      query PostsQuery {
        posts {
          _id
          title
          body
        }
      }
    `
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(r => r.json())
    .then(r => {
      dispatch({
        type: GET_ITEMS,
        payload: r.data.posts
      })
    })
    .catch(err => {
      console.log(err)
    })
}
export const getPost = () => {
  return {
    type: GET_ITEM
  }
}
export const createPost = post => dispatch => {
  dispatch(setItemsLoading())
  fetch('http://localhost:4000/', {
    method: 'POST',
    body: JSON.stringify({
      query: `
      mutation CreatePost($title: String!, $body: String!) {
        createPost(title: $title, body: $body) {
          _id
          title
          body
        }
      }
    `,
      variables: {
        title: post.body,
        body: post.title
      }
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(r => r.json())
    .then(r => {
      console.log(r.data.createPost)
      dispatch({
        type: CREATE_ITEM,
        payload: r.data.createPost
      })
    })
    .catch(err => {
      console.log(err)
    })
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}
