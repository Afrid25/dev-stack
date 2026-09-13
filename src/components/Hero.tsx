import banner from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section id="home" className="w-full max-w-full overflow-x-hidden bg-white text-slate-800">
      <div className="mx-auto grid w-full max-w-6xl min-w-0 items-center gap-8 px-4 py-6 sm:px-6 md:py-10 lg:grid-cols-2 lg:gap-12 lg:px-8">
        
        <div className="mx-auto min-w-0 w-full max-w-lg text-center lg:mx-0 lg:text-left">
          <h1 className="max-w-full break-words text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Build Your Ideal{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-4 w-full max-w-md text-sm leading-relaxed text-slate-500 sm:text-base lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="mt-5 flex w-full min-w-0 flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href="#technology"
              className="rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-3 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:opacity-95 sm:w-auto"
            >
              Explore Technologies
            </a>

            <a
              href="#learn-more"
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-xs font-semibold text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 sm:w-auto"
            >
              Learn More
            </a>
          </div>
        </div>

        
        <div className="flex min-w-0 w-full items-center justify-center lg:justify-end">
          <img
            src={banner}
            alt="Layered technology stack illustration"
            className="h-auto w-full max-w-56 object-contain drop-shadow-md select-none sm:max-w-xs"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
