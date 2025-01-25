import { graphql } from "../../gql";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query verifyGoogleAuthToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`);

export const getCurrentUser = graphql(`
  #graphql
  query GetCurrentUser {
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageUrl
    }
  }
`);

export const getUserDataById = graphql(`
  #graphql
  query GetUserById($userId: String!) {
    getUserProfileData(userId: $userId) {
      firstName
      lastName
      profileImageUrl
      email
      posts {
        id
        content
        imageId
        imageUrl
      }
    }
  }
`);
