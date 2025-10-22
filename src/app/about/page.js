"use client";

import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  return (
    <div className="w-[90] ml-10">
      <h1>Hello {session?.user?.name}</h1>

      <div className="flex gap-3">
        <div>
        <button className="p-2 bg-amber-600 hover:bg-gray-600 cursor-pointer text-white" onClick={() => signIn()}>
          Sign In
        </button>
      </div>
      <div>
        <button className="p-2 bg-amber-600 hover:bg-gray-600 cursor-pointer text-white" onClick={() => signOut()}>Logout</button>
      </div>
      </div>
    </div>
  );
};

export default page;
