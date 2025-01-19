import { GraphQLClient } from "graphql-request";
const isClient = typeof window !== undefined;

const getAuthToken = () => window.localStorage.getItem("authToken");


export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql", 
   {
        headers: () => {
             return {Authorization: `Bearer ${isClient? getAuthToken() : ""}`}
        }
   }
);