import React from "react";

const practiceAreas = [
  {
    subtitle: "Divorcios",
    description:
      "Tramitación de divorcios unilaterales y bilaterales, junto con la negociación de todos los aspectos que derivan del mismo. Debido a nuestra especialización en el derecho de familia y conocimiento de la jurisdicción, hemos logrado finalizar el proceso de divorcio y su inscripción en menos de dos meses.",
  },
  {
    subtitle: "Alimentos",
    description:
      "Reclamo y gestión de cuota alimentaria para hijos, cónyuge o parientes. Priorizando la rapidez que requiere el proceso y el efectivo cobro de la cuota.",
  },
  {
    subtitle: "Sucesiones",
    description:
      "Intervención en sucesiones de todo tipo. Tanto en sucesiones con todos los herederos de acuerdo, como en aquellas que haya conflicto entre herederos. Diseño de estrategias y promoción de acciones judiciales que protejan los derechos de nuestros clientes.",
  },
  {
    subtitle: "Internaciones",
    description:
      "Asistencia legal en procedimientos de internaciones involuntarias por razones de salud mental. Solicitudes de evaluaciones compulsivas involuntarias para determinar si una persona posee criterio de internación y, en caso positivo, proceder a su internación por salud mental.",
  },
  {
    subtitle: "División de bienes",
    description:
      "Intervención en la liquidación y adjudicación de bienes gananciales tras un divorcio o separación. Buscando un reparto justo y económicamente favorable.",
  },
  {
    subtitle: "Filiaciones",
    description:
      "Asesoramiento y promoción de acciones para el reconocimiento y/o impugnación de vínculos filiales.",
  },
  {
    subtitle: "Adopciones",
    description:
      "Asesoramiento durante todo el proceso adoptivo, garantizando el cumplimiento de los requisitos legales y acompañando a las familias en cada etapa.",
  },
  {
    subtitle: "Cambios de nombre",
    description:
      "Tramitación judicial de cambio de nombre o apellido, de conformidad con la normativa vigente.",
  },
  {
    subtitle: "Violencia Familiar",
    description:
      "Intervención inmediata en casos de violencia familiar, solicitando medida de protección y brindando contención legal a las personas afectadas.",
  },
  {
    subtitle: "Determinaciones de la capacidad jurídica",
    description:
      "Promoción del proceso judicial para determinar la capacidad de una persona para ejercer sus derechos, proponiendo sus sistemas de apoyo o curadores, con el fin de garantizar su protección y autonomía.",
  },
{
  subtitle: (
    <>
      Cuidado personal <br className="hidden sm:block" />
      y comunicación con los hijos
    </>
  ),
  description:
    "Asesoramiento, diseño de estrategias y promoción de acciones de fondo y/o medidas cautelares, para determinar el cuidado personal de los hijos y el régimen de comunicación con el otro progenitor y/o parientes.",
  className: "sm:min-w-[410px]",
}

];

export const PracticeAreas = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-lora font-bold text-center text-gray-900 mb-16">
          Áreas de práctica
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {practiceAreas.map((area, index) => (
          <div key={index} className={`relative group ${area.className || ""}`}>
          <div className="border-b-2 border-[#1b263b] pb-2">
            <div className="flex justify-between items-center">
              <div className="text-xl sm:text-3xl font-lora font-semibold text-gray-800 leading-snug">
                {area.subtitle}
              </div>
              <span className="text-2xl sm:hidden text-[#1b263b] font-bold">+</span>
            </div>
          </div>
            <div className="absolute z-50 hidden group-hover:block bg-white text-gray-800 text-lg font-lora font-medium leading-relaxed shadow-2xl rounded-xl p-8 w-[500px] max-w-[90vw] transition-all duration-300 top-12 left-1/2 -translate-x-1/2">
              {area.description}
            </div>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};
