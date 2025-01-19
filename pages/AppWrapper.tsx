import Login from "@/components/Login";
import { useCurrentUser } from "@/hooks/user";
import React from "react";
import XApp from "./App";

const AppWrapper = () => {
  const { user } = useCurrentUser();
//   console.log(user);

  return (
    <>
      {user ? (
        <XApp user={user} />
      ) : (
        <Login />
      )}
    </>
  );
};

export default AppWrapper;
