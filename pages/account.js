import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Head from "next/head";
import usePremiumStatus from "../stripe/usePremiumStatus";
import { createPortalLink } from "../stripe/createPortalLink";
import { useState } from "react";

function Home() {
    const router = useRouter();
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const userIsPremium = usePremiumStatus(user);
    const [openingPortal, setOpeningPortal] = useState(false);
    
    if (loading) {
        return <Loading />;
    };
    
    if (!user) {
        router.push("/signin");
        return <div />;
    };

    const signOut = async () => {
        auth.signOut();
    };

    const callPortal = async () => {
        setOpeningPortal(true);
        await createPortalLink();
    };

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Head>
                <title>Account - Example AI</title>
            </Head>
            <main className="grow bg-neutral-50">
                <DashboardHeader signOut={signOut} />
                
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 pb-10 lg:pt-44 lg:pb-20">
                    <h2 className="h2 text-black pb-10">Your Account</h2>
                    <div className="max-w-lg pb-20">
                        <div className="w-full mb-6">
                            <label className="block text-neutral-500 text-sm font-medium mb-2" htmlFor="email">
                                Email
                            </label>
                            <input id="email" type="text" className="form-input w-full text-neutral-800" disabled value={user.email ? user.email : "n/a"} />
                        </div>
                        <div className="w-full mb-6">
                            <label className="block text-neutral-500 text-sm font-medium mb-2" htmlFor="name">
                                Name
                            </label>
                            <input id="name" type="text" className="form-input w-full text-neutral-800" disabled value={user.displayName ? user.displayName : "n/a"} />
                        </div>
                        <div className="w-full">
                            <label className="block text-neutral-500 text-sm font-medium mb-2" htmlFor="plan">
                                Plan
                            </label>
                            <input id="plan" type="text" className="form-input w-full text-neutral-800" disabled value={userIsPremium ? "Premium" : "Free"} />
                            <button href="#" className={`mt-8 btn-sm shadow-sm ${openingPortal ? "text-neutral-500 bg-neutral-300" : "text-white bg-sky-600 hover:bg-sky-700"}`} onClick={() => callPortal()}>
                                {openingPortal ? "Opening portal..." : "Open customer portal"}
                            </button>
                        </div>
                    </div>
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default Home;