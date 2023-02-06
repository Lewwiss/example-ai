import Head from "next/head";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import { createCheckoutSession } from "../stripe/createCheckoutSession";
import { useState } from "react";
import Loading from "../components/Loading";
import Upgrade from "../components/Upgrade";
import DashboardHeader from "../components/DashboardHeader";
import Footer from "../components/Footer";
import usePremiumStatus from "../stripe/usePremiumStatus";

function Home() {
    initFirebase();
    const router = useRouter();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const userIsPremium = usePremiumStatus(user);
    const [upgradingPlan, setUpgradingPlan] = useState(false);
    
    if (loading) {
        return <Loading />;
    };
    
    if (!user) {
        router.push("/signin");
        return <div />;
    };

    if (userIsPremium) {
        router.push("/dashboard");
        return <div />;
    };

    const createStripeSession = async () => {
        setUpgradingPlan(true);
        createCheckoutSession(user.uid);
    };

    return (
        <div>
            <Head>
                <title>Upgrade Your Plan - Example AI</title>
            </Head>
            <DashboardHeader />
            <div className="h-20 mb-1" />
            <Upgrade createStripeSession={createStripeSession} upgradingPlan={upgradingPlan} />
            <Footer />
        </div>
    );
};

export default Home;