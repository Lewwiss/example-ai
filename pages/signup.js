import SignUp from "../components/SignUp";
import Head from "next/head";
import { useState } from "react";
import { initFirebase } from "../firebase/firebaseApp"; 
import { useRouter } from "next/router";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../components/Loading";

function Home() {
  initFirebase();
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const [user, loading] = useAuthState(auth);
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(true);
  const [error, setError] = useState("");

  if (loading) {
      return <Loading />;
    };
  
  if (user) {
      router.push("/dashboard");
      return <div />;
  };

  const signUpUser = async () => {
    if (!agreed) return setError("Client: Error (terms-not-accepted).");
    if (!email || email === "") return setError("Client: Error (invalid-email).");
    if (!password || password === "") return setError("Client: Error (invalid-password).");
    if (password !== confirmPassword) return setError("Client: Error (passwords-dont-match).");
    await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };

  const signInGoogle = async () => {
    await signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div>
      <Head>
        <title>Sign Up - Example AI</title>
      </Head>
      <SignUp signInGoogle={signInGoogle} signUpUser={signUpUser} setEmail={setEmail} setPassword={setPassword} setConfirmPassword={setConfirmPassword} setAgreed={setAgreed} error={error} />
    </div>
  );
};

export default Home;