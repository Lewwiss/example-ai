function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 md:h-24">
          <div className="shrink-0 mr-4">
            <a className="block group" href="/">
              <img src="/images/logo.svg" className="w-10 h-10" />
            </a>
          </div>
          <nav className="flex grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a className="font-medium text-neutral-500 decoration-sky-600 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out" href="/signin">
                  Sign in
                </a>
              </li>
              <li className="ml-3">
                <a className="btn-sm text-white bg-sky-600 hover:bg-sky-700 w-full shadow-sm" href="/signup">
                  Get started now
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
