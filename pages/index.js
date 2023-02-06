import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Creatives from '../components/Creatives';
import Pricing from '../components/Pricing';
import Faqs from '../components/Faqs';
import Cta from '../components/Cta';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Head>
        <title>Example AI - Generate essays instantly with the help of AI.</title>
      </Head>
      <Header />
      <Hero />
      <Creatives />
      <Pricing />
      <Faqs />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;