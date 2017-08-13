/**
 * GraphQL query definitions.
 */

import gql from 'graphql-tag'

const posts: object = gql`
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

const authors: object = gql`
  {
    authors {
      id
      firstName
      lastName
      createdAt
    }
  }
`

export default {
  posts,
  authors
}
