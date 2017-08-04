import gql from 'graphql-tag'

const posts = gql`
  {
    posts {
      id
      title
      votes
      createdAt
      author {
        id
        firstName
        lastName
        createdAt
      }
    }
  }
`

const authors = gql`
  {
    posts {
      id
      title
      votes
      createdAt
      author {
        id
        firstName
        lastName
        createdAt
      }
    }
  }
`

export default {
  posts,
  authors
}