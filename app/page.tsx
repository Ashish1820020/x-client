"use client"
import { useRouter } from "next/navigation";
import { useCurrentUser } from "@/hooks/user";


export default function Home() {
  const router = useRouter();
  const { user } = useCurrentUser();
  

  if (!user) {
    router.push("/auth")
  } else {
    router.push("/home");
  }
  return null
}
