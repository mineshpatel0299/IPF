import Image from "next/image";
import gg from "../../public/gg.jpeg";
import mobile from "../../public/mobile.png";

export default function Home() {
  return (
    <main className="flex h-svh w-full items-start justify-center bg-[#baab99] sm:items-center">
      <Image
        src={mobile}
        alt="International Punjabi Forum - Coming Soon"
        priority
        className="block h-auto w-full sm:hidden"
      />
      <Image
        src={gg}
        alt="International Punjabi Forum - Coming Soon"
        priority
        className="hidden h-full w-full scale-y-105 object-contain sm:block"
      />
    </main>
  );
}
