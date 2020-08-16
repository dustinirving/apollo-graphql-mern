export const getPostsQuery = `
      query PostsQuery {
        posts {
          _id
          title
          body
        }
      }
    `

export const createPostQuery = `mutation CreatePost($title: String!, $body: String!) {
      createPost(title: $title, body: $body) {
        _id
        title
        body
      }
    }
  `
