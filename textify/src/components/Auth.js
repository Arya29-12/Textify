import { useState } from "react";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Auth = () => {
  const [user, setUser] = useState(null);

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <>
          <h3>Welcome, {user.displayName}</h3>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={googleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
};

export default Auth;
