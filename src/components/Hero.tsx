"use client";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px]">
      {/* Imagen de fondo */}
      <Image
        src="/img/principal.jpg"
        alt="Imagen Principal"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        className="z-0"
      />

      {/* Overlay azul oscuro con opacidad */}
      <div className="absolute inset-0 bg-[#1b263bcc] z-10" />

      {/* Contenido centrado */}
      {/*<div className="absolute inset-0 z-20 flex flex-col items-start justify-center text-white text-left px-4 sm:px-16">*/}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h2 className="text-lg sm:text-3xl md:text-5xl font-semibold font-lora text-center max-w-md sm:max-w-lg md:max-w-3xl lg:max-w-4xl leading-tight">
          ASESORAMIENTO
          <br className="block" />
          <span className="block mt-0 sm:mt-4">PERSONALIZADO Y ESPECIALIZADO</span>
        </h2>
        <a
          href="#contacto"
          className="mt-8 px-6 py-3 bg-white text-[#1b263b] rounded-full text-lg font-medium transition hover:bg-gray-200"
        >
          Contactanos
        </a>
      </div>
    </section>
  );
};
