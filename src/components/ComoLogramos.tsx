"use client";
import React from "react";

const logros = [
  {
    titulo: "Especialización y excelencia",
    texto:
      "Trabajamos exclusivamente en el Derecho de Familia. Debido a nuestra especialización y profundo conocimiento de la jurisdicción, hemos logrado una reducción en los tiempos judiciales en al menos un 30%, y de los costos judiciales en un 50%.",
  },
  {
    titulo: "Personalización",
    texto:
      "Asesoramos en forma personalizada, escuchamos y comprendemos tu conflictiva, entendemos que tu caso es único, y acompañamos con empatía y eficiencia la resolución del conflicto. Mantenemos una comunicación fluida y transparente con nuestros clientes.",
  },
  {
    titulo: "Proactividad y eficiencia",
    texto:
      "Accionamos consistentemente en la solución de tu caso. Nos anticipamos a los posibles conflictos y logramos soluciones eficientes y económicamente favorables.",
  },
  {
    titulo: "Innovación",
    texto:
      "Buscamos soluciones creativas y adaptadas a cada caso. Utilizamos herramientas digitales modernas para optimizar la gestión de procesos, agilizar trámites y ofrecer un servicio de excelencia.",
  },
];

export const ComoLogramos = () => {
  return (
    <section className="py-20 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-lora font-bold text-center text-[#1b263b] mb-20">
          ¿Cómo lo logramos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {logros.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
          <div className="min-w-[60px] h-[60px] flex items-center justify-center bg-[#1b263b] text-white text-3xl font-lora rounded-full">
            {idx + 1}
          </div>
              <div>
                <h3 className="text-2xl font-lora font-semibold text-[#1b263b] mb-2">
                  {item.titulo}
                </h3>
                <p className=" text-base sm:text-lg font-lora font-medium text-gray-800">
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
