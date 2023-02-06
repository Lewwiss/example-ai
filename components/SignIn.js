function SignIn({ signInGoogle, signInEmail, setEmail, setPassword, error }) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        <header className="absolute w-full z-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between h-20 md:h-24">
              <div className="shrink-0 mr-4">
                <a className="block group" href="/">
                  <img src="/images/logo.svg" className="w-10 h-10" />
                </a>
              </div>
            </div>
          </div>
        </header>
        <main className="grow bg-neutral-50">
          <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto text-center pb-12">
                  <h1 className="h2 text-black">Sign In</h1>
                </div>
                <div className="max-w-sm mx-auto">
                  <div>
                    <div className="flex flex-wrap mb-4">
                      <div className="w-full">
                        <label className="block text-neutral-500 text-sm font-medium mb-2" htmlFor="email">
                          Email
                        </label>
                        <input id="email" type="email" className="form-input w-full text-neutral-800" required onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    <div className="flex flex-wrap mb-4">
                      <div className="w-full">
                        <label className="block text-neutral-500 text-sm font-medium mb-2" htmlFor="password">
                          Password
                        </label>
                        <input id="password" type="password" className="form-input w-full text-neutral-800" required onChange={(e) => setPassword(e.target.value)} />
                      </div>
                    </div>
                    { error ? <p className="btn-sm border-rose-200 border bg-rose-100 mt-3 mb-1 text-rose-500 text-sm">{error}</p> : null }
                    <div className="flex flex-wrap items-center justify-between mt-6">
                      <a className="font-medium text-sm sm:text-base text-sky-600 decoration-sky-600 decoration-2 underline-offset-2 hover:underline" href="/signup">
                        Create an account
                      </a>
                      <div className="ml-2">
                        <button className="btn-sm text-white bg-sky-600 hover:bg-sky-700 shadow-sm" onClick={signInEmail}>Sign In</button>
                      </div>
                    </div>
                    <div className="mt-5">
                      <label className="flex items-start">
                        <a className="text-sm text-neutral-500" href="/forgot-password">Forgot your password?</a>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center my-6">
                    <div className="border-t border-neutral-200 grow mr-3" aria-hidden="true" />
                    <div className="text-sm text-neutral-500 italic">or</div>
                    <div className="border-t border-neutral-200 grow ml-3" aria-hidden="true" />
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full">
                      <button className="btn-sm bg-white border border-neutral-200 w-full relative flex justify-center items-center" onClick={signInGoogle}>
                        <img src="/images/google.svg" className="w-8 h-8" />
                        <span className="pl-2">Join with Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  };
  
  export default SignIn;