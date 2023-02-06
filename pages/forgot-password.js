import Head from "next/head";
import { useRouter } from "next/router";
import ForgotPassword from "../components/ForgotPassword";
import { useState } from "react";
import { initFirebase } from "../firebase/firebaseApp";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "../components/Loading";

function Home(){
  initFirebase();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [resetting, setResetting] = useState(false);

  if (loading) {
    return <Loading />;
  };

  if (user) {
    router.push("/dashboard");
    return <div />;
  };

  const resetPassword = async () => {
    if (!email || email === "") return setError("Client: Error (invalid-email).");
    setResetting(true);
    await sendPasswordResetEmail(auth, email)
    .then(() => {
      setMessage("Firebase: Sent (auth/email-sent).");
    })
    .catch((error) => {
      setError(error.message);
    });
    setResetting(false);
  };

  return(
    <div>
      <Head>
        <title>Reset Password - Example AI</title>
      </Head>
      <ForgotPassword setEmail={setEmail} resetPassword={resetPassword} error={error} message={message} resetting={resetting} />
    </div>
  );
};

export default Home;