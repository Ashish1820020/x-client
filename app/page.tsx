'use client'

import AppWrapper from "@/pages/AppWrapper";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_OAUTH_CLIENT_ID ?? ""}>
      <AppWrapper />
      <ReactQueryDevtools initialIsOpen={false} />
    </GoogleOAuthProvider>
  </QueryClientProvider>
  );
}
