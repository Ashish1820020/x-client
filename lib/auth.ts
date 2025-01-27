// lib/auth.ts
import { cookies } from "next/headers";

export async function getAuth() {
  const token = 
    await cookies()
    .then((cookieStore) => cookieStore.get("authToken")?.value)
    .catch((error) => console.error(error));

  console.log(token);
  

  if (!token) {
    return null;
  }

  // Optionally, validate the token or fetch user data
  // const user = await fetch("https://api.example.com/validate-token", {
  //   headers: { Authorization: `Bearer ${token}` },
  // }).then((res) => (res.ok ? res.json() : null));

  return token;
}
