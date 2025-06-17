"use client";
import Link from "next/link";

export default function Gracias() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#253654] text-[#e0e1dd] px-4 text-center animate-fade-in">
      <h1 className="text-4xl sm:text-5xl font-lora font-bold mb-4">
        ¡Gracias por su consulta!
      </h1>
      <p className="text-lg sm:text-xl font-lora mb-8">
        Le responderemos a la brevedad.
      </p>
      <Link
        href="/"
        className="px-8 py-3 rounded-full bg-white text-[#1b263b] font-lora font-semibold transition-all hover:bg-gray-100"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
