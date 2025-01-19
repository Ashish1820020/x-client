"use client"

import { graphqlClient } from '@/clients/api'
import { verifyGoogleTokenQuery } from '@/graphql/query/user'
import { CredentialResponse, GoogleLogin } from '@react-oauth/google'
import { useQueryClient } from '@tanstack/react-query'
import React from 'react'

const Login = () => {
  const queryClient = useQueryClient();


  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if(!credentialResponse.credential) {
      return;
    }

    const {verifyGoogleToken} = await graphqlClient.request(verifyGoogleTokenQuery, { token: credentialResponse.credential });

    if (verifyGoogleToken)
       window.localStorage.setItem("authToken", verifyGoogleToken)

    await queryClient.invalidateQueries({queryKey: ["currentUser"]})
  }



  return (
    <GoogleLogin
    onSuccess={handleLogin}
    />
  )
}

export default Login