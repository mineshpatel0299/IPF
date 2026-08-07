import Image from "next/image";
import comingSoon from "../../public/comingsoon.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-svh flex-1 items-center justify-center bg-[#EDEBEC] p-4 sm:p-6 md:p-10">
      <Image
        src={comingSoon}
        alt="International Punjabi Forum — Coming Soon. Honesty, Selfless Service & Justice to All. Punjab, Punjabi & Punjabiyat. Dr Harvansh Chawla, Chairman."
        priority
        placeholder="blur"
        sizes="(min-width: 640px) 100vw, 100vw"
        className="w-full h-auto sm:w-auto sm:h-[85svh] max-w-full max-h-[90svh] rounded-2xl shadow-2xl object-contain"
      />
    </main>
  );
}
