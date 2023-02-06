function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-white to-white pointer-events-none -z-10" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 md:pt-40">
          <div className="relative max-w-5xl mx-auto text-center flex flex-col">
            <div>
              <h1 className="mx-auto max-w-4xl h1 tracking-tighter text-7xl font-bold leading-tight text-black mt-8 mb-8" data-aos="fade-up" data-aos-delay="100">
                Generate essays instantly with the help of AI.
              </h1>
              <p className="mx-auto max-w-2xl text-xl text-neutral-500 leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="200">
                Utilize AI-powered tools to transform your ideas into professional articles that can boost the success of your business.
              </p>
              <div className="mx-auto flex flex-col md:flex-row justify-center justify-start space-y-6 md:space-y-0 md:space-x-6 mb-20" data-aos="fade-up" data-aos-delay="200">
                <div>
                  <a className="btn text-white bg-sky-600 hover:bg-sky-700 w-full shadow-sm" href="/signup">
                    Get started now
                  </a>
                </div>
                <div className="flex justify-center items-center flex-row">
                  <p className="text-sm text-neutral-500">Payments with</p>
                  <img src="/images/stripe.svg" className="h-7" />
                </div>
              </div>
              <div className="relative mx-auto max-w-4xl h-32 md:h-56 lg:h-96 bg-white border-neutral-200 border-t border-l border-r overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
                <div className="absolute w-full h-2/3 bottom-0 bg-gradient-to-t from-white to-transparent" />
                <img src="/images/dashboard.png" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;