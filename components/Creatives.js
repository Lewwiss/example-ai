function Creatives() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-14 md:py-16">
          <div className="max-w-xl mx-auto md:max-w-none flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 order-2 md:order-1 pt-16 md:pt-0" data-aos-id-cards>
              <div className="flex p-6 px-16 lg:pr-40">
                <img src="/images/creatives.svg" />
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-1/2 lg:pr-10">
              <div className="text-center md:text-left">
                <h3 className="h2 text-5xl font-bold leading-tight tracking-tighter text-black max-w-2xl">Adaptable for any purpose.</h3>
                <p className="text-xl text-neutral-500 leading-relaxed mt-6 mb-8">
                  Easily and swiftly turn your ideas into professional articles with the help of our AI tool.
                </p>
                <div>
                  <a className="btn text-white bg-sky-600 hover:bg-sky-700 shadow-sm" href="/signup">
                    Get started now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creatives;