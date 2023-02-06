function Footer() {
  return (
    <div className="bg-black selection:bg-white selection:text-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-10 md:py-16">
          <div className="flex items-center justify-center mb-12 md:mb-6">
            <div className="shrink-0">
              <a className="inline-flex group mb-8 sm:mb-0" href="/">
                <img src="/images/logo-white.svg" className="w-10 h-10" />
              </a>
            </div>
          </div>
          <div className="text-center mb-8">
            <div className="text-md font-medium space-x-6">
              <a className="text-white decoration-white decoration-2 underline-offset-2 hover:underline" href="mailto:contact@stormai.com">
                Get in touch
              </a>
              <a className="text-white decoration-white decoration-2 underline-offset-2 hover:underline" href="/terms">
                Privacy &amp; Terms
              </a>
            </div>
          </div>
          <div className="text-md text-neutral-500 text-center">
            If you see something wrong here or you would like to have it removed, please{' '}
            <a className="font-medium text-white decoration-white underline-offset-2 hover:underline" href="mailto:contact@stormai.co">
              contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
