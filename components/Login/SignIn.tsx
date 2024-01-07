import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const SignIn = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  }

  return (
    <div>
      Not Sign In
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
};

export default SignIn;
