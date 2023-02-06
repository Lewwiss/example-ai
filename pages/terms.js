import Head from "next/head";
import Header from "../components/Header";
import Combined from "../components/Terms";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
            <Head>
                <title>Our Terms - Example AI</title>
            </Head>
            <div>
                <Header />
                <div className="h-20 mb-1" />
                <Combined />
                <Footer />
            </div>
        </div>
    );
};

export default Home;