import { useEffect } from 'react';
import '../styles/globals.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 500,
      easing: 'ease-out-cubic',
    });
  });

  return(
    <div className="font-inter antialiased text-neutral-800 tracking-tight selection:bg-sky-600 selection:text-white">
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;