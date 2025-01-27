import Login from "@/components/Login";
import { getAuth } from "@/lib/auth";
import { redirect } from "next/navigation";
import React from "react";

export default async function AuthPage() {
  const token = await getAuth();

  if (token) {
    redirect("/app/home");
  }
  return <Login />;
}
