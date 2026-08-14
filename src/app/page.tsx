import Image from "next/image";
import ggg from "../../public/ggg.png";
import mobile from "../../public/mobile.png";

export default function Home() {
  return (
    <main className="flex h-svh w-full items-center justify-center bg-[#baab99]">
      <Image
        src={mobile}
        alt="International Punjabi Forum - Coming Soon"
        priority
        className="block h-full w-full object-contain sm:hidden"
      />
      <Image
        src={ggg}
        alt="International Punjabi Forum - Coming Soon"
        priority
        className="hidden h-full w-full scale-y-105 object-contain sm:block"
      />
    </main>
  );
}
