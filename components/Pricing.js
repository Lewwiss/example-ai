function Card() {
  return (
    <div className="relative bg-white rounded-sm border relative flex flex-col h-full p-8 max-w-md shadow-sm" data-aos="fade-left">
      <div className="absolute -top-4 right-10 bg-sky-600 py-2 px-4">
        <p className="font-semibold text-white text-sm">Full access</p>
      </div>
      <div>
        <div className="text-lg font-semibold mb-4 text-black">Premium</div>
        <div className="inline-flex items-baseline mb-2">
          <span className="text-2xl font-medium text-black">£</span>
          <span className="text-6xl mt-2 font-bold text-black">15</span>
          <span className="font-medium text-black">/mo</span>
        </div>
        <div className="text-neutral-500 mt-4 mb-7 text-lg leading-normal">Explore our AI tool and start creating your own content instantly.</div>
          <a className="btn text-white bg-sky-600 hover:bg-sky-700 w-full shadow-sm" href="/signup">Upgrade your plan</a>
        </div>
    </div>
  );
};

function Pricing() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
              <h3 className="h2 font-bold leading-tight tracking-tighter text-black max-w-2xl">Get started with premium.</h3>
              <ul className="pt-8 text-lg text-neutral-500 space-y-3">
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-sky-600 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Unlimited Text Generation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-sky-600 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Plagiarism Free Content</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-sky-600 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Article Creation</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-3 h-3 fill-current text-sky-600 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>SEO Optimized</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center lg:items-start lg:justify-center">
              <Card />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;