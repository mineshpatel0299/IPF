import Image from "next/image";
import bgLandmarks from "../../public/soon/bg.png";
import logo from "../../public/soon/logo.png";
import chairmanPhoto from "../../public/soon/WhatsApp_Image_2026-08-12_at_15.35.49-removebg-preview.png";

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className="h-px w-10 bg-[#C9A961] sm:w-14 lg:w-16" />
      <span className="h-2 w-2 rotate-45 bg-[#C9A961]" />
      <span className="h-px w-10 bg-[#C9A961] sm:w-14 lg:w-16" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative flex h-svh flex-1 items-end justify-center bg-[#EDEBEC] p-4 md:p-8 overflow-hidden">
      {/* Landmarks Skyline Background */}
      <Image
        src={bgLandmarks}
        alt="International Landmarks Skyline"
        priority
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-auto w-full object-contain object-bottom opacity-25 mix-blend-multiply"
      />
      <div className="absolute inset-0 z-0 bg-[#EDEBEC]/40" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center gap-3 sm:flex-row sm:items-end sm:justify-center sm:gap-6 sm:-translate-x-8 lg:gap-14 lg:-translate-x-16">
        {/* Chairman Photo */}
        <div className="relative order-2 -mb-4 h-[36svh] w-auto shrink-0 sm:order-1 sm:h-[92svh] md:-mb-8 lg:h-svh">
          <Image
            src={chairmanPhoto}
            alt="Dr Harvansh Chawla, Chairman"
            priority
            placeholder="blur"
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>

        {/* Logo + Typography */}
        <div className="order-1 flex flex-col items-center gap-2 text-center sm:order-2 sm:max-w-sm sm:gap-5 sm:pb-4 lg:max-w-xl lg:pb-6 xl:max-w-2xl">
          <Image
            src={logo}
            alt="International Punjabi Forum"
            priority
            className="h-16 w-auto sm:h-36 lg:h-44 xl:h-48"
          />

          <Divider />
          <p className="font-serif text-base italic leading-snug text-[#1B2A63] sm:text-2xl lg:text-3xl">
            Honesty, Selfless Service
            <br />
            &amp; Justice to All.
          </p>

          <Divider />
          <p className="font-serif text-sm font-bold leading-snug text-[#1B2A63] sm:text-xl lg:text-2xl">
            Punjab, Punjabi
            <br />
            &amp; Punjabiyat
          </p>

          <Divider />
          <p className="font-serif text-xl font-bold text-[#1B2A63] sm:text-3xl lg:text-4xl">
            Dr Harvansh Chawla
          </p>

          <Divider />
          <p className="font-serif text-xs font-semibold tracking-wide text-[#1B2A63] sm:text-lg lg:text-xl">
            Chairman
          </p>
        </div>
      </div>
    </main>
  );
}
