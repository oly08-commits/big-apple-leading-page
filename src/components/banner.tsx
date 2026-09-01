import { Header } from "./header/header";

export function Banner() {
  return (
    <section
      id="home"
      className="relative flex min-h-dvh w-full flex-col overflow-hidden bg-gradient-to-b from-blue-100 to-blue-500"
    >
      <Header />

      <div className="relative flex flex-1 items-end justify-center">
        <h1
          className="
            absolute top-10 z-10
            mt-10
            text-center
            font-black text-blue-400
            text-6xl
            sm:text-7xl
            md:text-8xl
            lg:text-9xl
            lg:scale-150
          "
        >
          Big Apple
        </h1>

        <img
          src="/banner.png"
          alt="Big Apple"
          className="
            relative z-20
            w-4/5 max-w-3xl
            object-contain
            sm:w-3/4
            lg:w-2/3
          "
        />

        <div className="absolute bottom-0 left-0 z-10 w-full">
          <svg
            className="block h-auto w-full opacity-75"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              fill="#0099ff"
              d="M0,32L40,80C80,128,160,224,240,234.7C320,245,400,171,480,154.7C560,139,640,181,720,165.3C800,149,880,75,960,69.3C1040,64,1120,128,1200,138.7C1280,149,1360,107,1400,85.3L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
