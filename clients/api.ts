import { GraphQLClient } from "graphql-request";
// import  { cookies } from 'next/headers';  // Only available on server side

// Function to get the auth token (client-side or server-side)
const getAuthToken = () => {
  // Check if we are on the client side
  if (typeof window !== 'undefined') {
    // Client-side: use document.cookie
    const token = window.localStorage.getItem("authToken");
    return token ?? null;
  }

  // Server-side: use next/headers cookies utility
//   const cookieStore = cookies();
//   return cookieStore.get('authToken')?.value || null;
};


// const getAuthToken = () => {
//      if (typeof window !== "undefined") {
//           return localStorage.getItem("authToken");
//      }
//      console.log("No auth token ")
//      return null;
// }


export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql", 
   {
        headers: () => {
             return {Authorization: `Bearer ${getAuthToken() ?? ""}`}
        }
   }
);