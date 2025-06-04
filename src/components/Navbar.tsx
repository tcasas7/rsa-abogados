"use client";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="relative w-full h-[180px] sm:h-[270px] bg-[#1b263b] overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image
          src="/img/logo-pag.png"
          alt="Logo RSA"
          width={900}
          height={300}
          className="object-contain"
          priority
          unoptimized

        />
      </div>
    </header>
  );
};
