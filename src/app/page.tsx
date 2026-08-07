import Image from "next/image";
import comingSoon from "../../public/comingsoon.jpeg";
import bgLandmarks from "../../public/bg-landmarks.png";

export default function Home() {
  return (
    <main className="relative flex min-h-svh flex-1 items-center justify-center bg-[#EDEBEC] p-4 sm:p-6 md:p-10 overflow-hidden">
      {/* Background Image */}
      <Image
        src={bgLandmarks}
        alt="International Landmarks Background"
        fill
        priority
        placeholder="blur"
        className="absolute inset-0 z-0 object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 z-0 bg-[#EDEBEC]/70" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <Image
          src={comingSoon}
          alt="International Punjabi Forum — Coming Soon. Honesty, Selfless Service & Justice to All. Punjab, Punjabi & Punjabiyat. Dr Harvansh Chawla, Chairman."
          priority
          placeholder="blur"
          sizes="(min-width: 640px) 100vw, 100vw"
          className="w-full h-auto sm:w-auto sm:h-[85svh] max-w-full max-h-[90svh] rounded-2xl shadow-2xl object-contain"
        />
      </div>
    </main>
  );
}
