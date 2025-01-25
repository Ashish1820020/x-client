"use client"

import { graphqlClient } from '@/clients/api'
import { verifyGoogleTokenQuery } from '@/graphql/query/user'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
  const queryClient = useQueryClient();
    const router = useRouter();


  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if(!credentialResponse.credential) {
      return;
    }

    const {verifyGoogleToken} = await graphqlClient.request(verifyGoogleTokenQuery, { token: credentialResponse.credential });

    if (verifyGoogleToken){
      window.localStorage.setItem("authToken", verifyGoogleToken)
      document.cookie = `authToken=${verifyGoogleToken}; path=/; secure; SameSite=Strict`;

    }

    await queryClient.invalidateQueries({queryKey: ["currentUser"]});
    router.push("/home")
  }



  return (
    <GoogleLogin
    onSuccess={handleLogin}
    />
  )
}

export default Login