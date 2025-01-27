"use client";

import { graphqlClient } from "@/clients/api";
import { verifyGoogleTokenQuery } from "@/graphql/query/user";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  // console.log();
  

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    try {
      console.log(credentialResponse);
      
      if (!credentialResponse.credential) {
        return;
      }



      const { verifyGoogleLogin } = await graphqlClient.request(
        verifyGoogleTokenQuery,
        { token: credentialResponse.credential }
      );

      if (verifyGoogleLogin) {
        window.localStorage.setItem("authToken", verifyGoogleLogin);

        const res = await fetch("/set-cookie", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: verifyGoogleLogin }),
        });

        if (!res.ok) {
          throw new Error("Failed to set cookie");
        }
      }

      await queryClient.invalidateQueries({ queryKey: ["currentUser"] });
      router.push("/app/home");
    } catch (error) {
      console.log(error);
    }
  };

  return <GoogleLogin onSuccess={handleLogin} />;
};

export default Login;
