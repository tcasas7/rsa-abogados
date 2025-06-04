"use client";
import React from "react";
import { Container } from "@/components/Container";

export const Objetivo = () => {
  return (
    <section className="bg-[#e0e1dd] py-20">
      <Container>
        <div className="max-w-4xl mx-auto text-left sm:text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-lora text-[#1b263b] mb-8">
            Nuestro Objetivo
          </h2>
          <p className="text-base sm:text-lg font-lora font-medium text-gray-800">
            Nuestro principal objetivo es brindar un asesoramiento de excelencia, eficiente y personalizado,
            entendiendo que cada caso es único y requiere una atención dedicada. <br /><br />
            A través de nuestro conocimiento profundo del derecho de familia, trabajamos para proteger tus derechos,
            defender tus intereses y guiarte en todo momento con responsabilidad y ética profesional. <br /><br />
            Nuestro objetivo es ser el apoyo que necesitás en los momentos más delicados, resolviendo con sensibilidad
            y compromiso, siempre en búsqueda de la mejor solución para vos y tu familia.
          </p>
        </div>
      </Container>
    </section>
  );
};
