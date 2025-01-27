import { graphql } from "../../gql";

export const verifyGoogleTokenQuery = graphql(`
  #graphql
  query Query($token: String!) {
    verifyGoogleLogin(token: $token)
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
      followers {
        id
      }
      following {
        id
      }
      recomendedUsers {
        id
        firstName
        lastName
        profileImageUrl
      }
    }
  }
`);

export const getUserDataById = graphql(`
  #graphql
  query GetUserById($userId: String!) {
    getUserProfileData(userId: $userId) {
      id
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
      followers{
        id
        firstName
        lastName
      }
      following{
        id
        firstName
        lastName
      }
    }
  }
`);
export const followUserProfile = graphql(`
  #graphql
  mutation followUser($userId: ID!) {
    followUser(userId: $userId)
  }
`);

export const unfollowUserProfile = graphql(`
  #graphql
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId)
  }
`);
