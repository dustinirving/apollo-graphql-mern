export const getPostsQuery = `
      query PostsQuery {
        posts {
          _id
          title
          body
        }
      }
    `
export const getUserQuery = `
      query userQuery {
        user {
          _id
          email
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
export const createUserQuery = `mutation CreateUser($email: String!, $password: String!) {
    createUser(email: $email, password: $password) {
      _id
      email
    }
  }
`

export const loginQuery = `mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        _id
        email
      }
    }
  `
