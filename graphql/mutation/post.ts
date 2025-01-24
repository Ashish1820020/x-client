import { graphql } from "@/gql";

export const createNewPost = graphql(`
  #graphql
  mutation CreateNewPost($payload: CreatePost!) {
    createPost(payload: $payload) {
      id
    }
  }
`);
