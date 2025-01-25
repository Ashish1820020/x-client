import { GraphQLClient } from "graphql-request";
const isClient = typeof window !== undefined;

const getAuthToken = () => {
     if (typeof window !== "undefined") {
          return localStorage.getItem("authToken");
     }
     console.log("No auth token ")
     return null;
}


export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql", 
   {
        headers: () => {
             return {Authorization: `Bearer ${isClient? getAuthToken() : ""}`}
        }
   }
);