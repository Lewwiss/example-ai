import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { initFirebase } from "../firebase/firebaseApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Head from "next/head";
import { useEffect, useState } from "react";
import usePremiumStatus from "../stripe/usePremiumStatus";
import DashboardHeader from "../components/DashboardHeader";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

function Home() {
    const router = useRouter();
    initFirebase();
    const auth = getAuth();
    const [user, loading] = useAuthState(auth);
    const userIsPremium = usePremiumStatus(user);

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const responseArr = response.substr(2).split(" ");
    const [awaitingResponse, setAwaitingReponse] = useState(false);
    const [typedResponse, setTypedResponse] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = responseArr.slice(0, typedResponse.split(" ").length + 1);
            setTypedResponse(current.join(" "));
        }, 60);

        return () => clearTimeout(timeout);
    }, [responseArr, typedResponse]);

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

    const callApi = async () => {
        setAwaitingReponse(true);
        setResponse("  Generating...");
        const token = await user.getIdToken();

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({token: token, prompt: prompt})
        };

        await fetch("/api/generate", requestOptions)
            .then((data) => {
                if (data.status !== 200) throw new Error();
                return data.json();
            })
            .then((dataJson) => {
                return setResponse(dataJson.response);
            })
        .catch(() => {
            return setResponse("  There was an issue with your request, please resend.");
        });

        setAwaitingReponse(false);
    };

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Head>
                <title>Dashboard - Example AI</title>
            </Head>
            <main className="grow bg-neutral-50">
                <DashboardHeader signOut={signOut} />
                
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 pb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div>
                            <h2 className="h2 text-black">Dashboard</h2>
                        </div>
                        <div>
                            {
                                userIsPremium ? 
                                <div />
                                :
                                <div className="flex items-center justify-start lg:justify-end h-full pt-8 lg:pt-0">
                                    <a href="/upgrade" className="flex flex-row space-x-2.5 btn-sm shadow-sm bg-neutral-200 font-medium text-neutral-500 flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                                        </svg>
                                        <p>Upgrade plan here!</p>
                                    </a>
                                </div>
                            }
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 space-y-10 md:space-y-0 md:gap-10 pt-10">
                        <div className="col-span-1">
                            <div className="w-full">
                                <label className="block text-neutral-600 text-sm font-medium mb-2" htmlFor="email">
                                    Prompt
                                </label>
                                <textarea id="prompt" type="text" className="form-input w-full text-neutral-800 h-32" required placeholder="Write me an article about bitcoin" onChange={(e) => setPrompt(e.target.value)} />
                            </div>
                            <div className="mt-6">
                                <button className={`btn-sm shadow-sm ${awaitingResponse ? "text-neutral-500 bg-neutral-300" : "text-white bg-sky-600 hover:bg-sky-700"}`} onClick={() => {callApi()}} disabled={awaitingResponse}>{awaitingResponse ? "Generating..." : "Generate"}</button>
                            </div>
                        </div>
                        <div className="col-span-2 w-full pb-16">
                            <label className="block text-neutral-600 text-sm font-medium mb-2" htmlFor="response">
                                Response
                            </label>
                            <textarea id="response" type="text" className="form-input w-full text-neutral-700 h-96" disabled value={typedResponse} />
                            <button onClick={() => navigator.clipboard.writeText(typedResponse)} className="flex flex-row space-x-2.5 btn-sm shadow-sm mt-6 bg-neutral-200 font-medium text-neutral-600 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                                </svg>
                                <p>Copy response</p>
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