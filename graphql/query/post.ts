import { graphql } from "../../gql";


export const getAllPosts = graphql(`
  #graphql
  query GetAllPosts{
    getPosts {
        id
        content
        imageId
        imageUrl
        author {
          id
          firstName
          lastName
          profileImageUrl
        }
    }
  }
`);