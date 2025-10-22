"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Hello {session.user.name}</h1>
      <button className="" onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default page;
