import { GET_ITEMS, GET_ITEM, CREATE_ITEM, ITEMS_LOADING } from "./types";
import { getPostsQuery, createPostQuery } from "./queries";
import axios from "axios";

export const getPosts = () => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .post("/graphql", { query: getPostsQuery })
    .then((res) => {
      dispatch({
        type: GET_ITEMS,
        payload: res.data.data.posts,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getPost = () => {
  return {
    type: GET_ITEM,
  };
};
export const createPost = ({ title, body }) => (dispatch) => {
  dispatch(setItemsLoading());
  axios
    .post(
      "/graphql",
      {
        query: createPostQuery,
        variables: { title, body },
      })
    .then((res) => {
      dispatch({
        type: CREATE_ITEM,
        payload: res.data.data.createPost,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  };
};

// Using Fetch

// fetch('http://localhost:4000/', {
//   method: 'POST',
//   body: JSON.stringify({
//     query: `
//     query PostsQuery {
//       posts {
//         _id
//         title
//         body
//       }
//     }
//   `
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(r => r.json())
//   .then(r => {
//     dispatch({
//       type: GET_ITEMS,
//       payload: r.data.posts
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })

// fetch('http://localhost:4000/', {
//   method: 'POST',
//   body: JSON.stringify({
//   query: `
//   mutation CreatePost($title: String!, $body: String!) {
//     createPost(title: $title, body: $body) {
//       _id
//       title
//       body
//     }
//   }
// `,
//     variables: {
//       title: post.body,
//       body: post.title
//     }
//   }),
//   headers: {
//     'Content-Type': 'application/json'
//   }
// })
//   .then(r => r.json())
//   .then(r => {
//     console.log(r.data.createPost)
//     dispatch({
//       type: CREATE_ITEM,
//       payload: r.data.createPost
//     })
//   })
//   .catch(err => {
//     console.log(err)
//   })
