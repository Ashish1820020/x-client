/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  #graphql\n  mutation CreateNewPost($payload: CreatePost!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n": types.CreateNewPostDocument,
    "\n  #graphql\n  query GetAllPosts{\n    getPosts {\n        id\n        content\n        imageId\n        imageUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n    }\n  }\n": types.GetAllPostsDocument,
    "\n  #graphql\n  query Query($token: String!) {\n    verifyGoogleLogin(token: $token)\n  }\n": types.QueryDocument,
    "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      recomendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n": types.GetCurrentUserDocument,
    "\n  #graphql\n  query GetUserById($userId: String!) {\n    getUserProfileData(userId: $userId) {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n      posts {\n        id\n        content\n        imageId\n        imageUrl\n      }\n      followers{\n        id\n        firstName\n        lastName\n      }\n      following{\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n": types.GetUserByIdDocument,
    "\n  #graphql\n  mutation followUser($userId: ID!) {\n    followUser(userId: $userId)\n  }\n": types.FollowUserDocument,
    "\n  #graphql\n  mutation UnfollowUser($userId: ID!) {\n    unfollowUser(userId: $userId)\n  }\n": types.UnfollowUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation CreateNewPost($payload: CreatePost!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  mutation CreateNewPost($payload: CreatePost!) {\n    createPost(payload: $payload) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetAllPosts{\n    getPosts {\n        id\n        content\n        imageId\n        imageUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetAllPosts{\n    getPosts {\n        id\n        content\n        imageId\n        imageUrl\n        author {\n          id\n          firstName\n          lastName\n          profileImageUrl\n        }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query Query($token: String!) {\n    verifyGoogleLogin(token: $token)\n  }\n"): (typeof documents)["\n  #graphql\n  query Query($token: String!) {\n    verifyGoogleLogin(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      recomendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetCurrentUser {\n    getCurrentUser {\n      id\n      email\n      firstName\n      lastName\n      profileImageUrl\n      followers {\n        id\n      }\n      following {\n        id\n      }\n      recomendedUsers {\n        id\n        firstName\n        lastName\n        profileImageUrl\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  query GetUserById($userId: String!) {\n    getUserProfileData(userId: $userId) {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n      posts {\n        id\n        content\n        imageId\n        imageUrl\n      }\n      followers{\n        id\n        firstName\n        lastName\n      }\n      following{\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"): (typeof documents)["\n  #graphql\n  query GetUserById($userId: String!) {\n    getUserProfileData(userId: $userId) {\n      id\n      firstName\n      lastName\n      profileImageUrl\n      email\n      posts {\n        id\n        content\n        imageId\n        imageUrl\n      }\n      followers{\n        id\n        firstName\n        lastName\n      }\n      following{\n        id\n        firstName\n        lastName\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation followUser($userId: ID!) {\n    followUser(userId: $userId)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation followUser($userId: ID!) {\n    followUser(userId: $userId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  #graphql\n  mutation UnfollowUser($userId: ID!) {\n    unfollowUser(userId: $userId)\n  }\n"): (typeof documents)["\n  #graphql\n  mutation UnfollowUser($userId: ID!) {\n    unfollowUser(userId: $userId)\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;