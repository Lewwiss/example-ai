function ForgotPassword({ setEmail, resetPassword, error, message, resetting }) {
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
                  <h1 className="h2">Reset Your Password</h1>
                </div>
                <div className="max-w-sm mx-auto">
                  <div>
                    <div className="flex flex-wrap mb-3">
                      <div className="w-full">
                        <label className="block text-neutral-500 text-sm font-medium mb-1" htmlFor="email">
                          Email
                        </label>
                        <input id="email" type="email" className="form-input w-full text-neutral-800" required onChange={(e) => setEmail(e.target.value)} />
                      </div>
                    </div>
                    { message ? <p className="btn-sm border-sky-200 border bg-sky-100 mt-3 mb-1 text-sky-500 text-sm">{message}</p> : null }
                    { error ? <p className="btn-sm border-rose-200 border bg-rose-100 mt-3 mb-1 text-rose-500 text-sm">{error}</p> : null }
                    <div className="text-right pt-4">
                      <button className={`btn-sm shadow-sm ${resetting ? "text-neutral-500 bg-neutral-300" : "text-white bg-sky-600 hover:bg-sky-700"}`} disabled={resetting} onClick={resetPassword}>{resetting ? "Resetting password..." : "Reset password"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
  
  export default ForgotPassword;