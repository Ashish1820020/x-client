import { cookies } from "next/headers";

export function getAuthToken() {
    const token =  cookies().then((data) => {
        return data
   })
    if (!token) {
      throw new Error('Auth token not found');
    }
    return token;
  }