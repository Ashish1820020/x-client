import { graphql } from "../../gql";

export const verifyGoogleTokenQuery = graphql(`#graphql
    query verifyGoogleAuthToken($token: String!) {
      verifyGoogleToken(token: $token)
    }
`);

export const getCurrentUser = graphql(`
  #graphql
  query GetCurrentUser{
    getCurrentUser {
      id
      email
      firstName
      lastName
      profileImageUrl
    }
  }
`);