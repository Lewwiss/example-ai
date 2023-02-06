import SignIn from "../components/SignIn";
import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { initFirebase } from "../firebase/firebaseApp"; 
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";

function Home() {
  const router = useRouter();
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (loading) {
    return <Loading />
  };

  if (user) {
    router.push("/dashboard");
    return <div />;
  };

  const signInGoogle = async () => {
    await signInWithPopup(auth, provider).catch((error) => {
      setError(error.message);
    });
  };

  const signInEmail = async () => {
    if (!email || email === "") return setError("Client: Error (invalid-email).");
    if (!password || password === "") return setError("Client: Error (invalid-password).");
    await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      setError(error.message);
    });
  };

  return (
    <div>
      <Head>
        <title>Sign In - Example AI</title>
      </Head>
      <SignIn signInGoogle={signInGoogle} signInEmail={signInEmail} setEmail={setEmail} setPassword={setPassword} error={error} />
    </div>
  );
};

export default Home;