"use client";
import React, { useRef, useState } from "react";

export const Contacto = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <>
      
      <div className="flex overflow-x-auto md:flex-row w-full no-scrollbar">
        <div className="flex-none w-[300px] h-[200px] md:flex-1 md:h-[400px]">
          <img
            src="/img/mockup-hoja.png"
            alt="Mockup hoja"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-none w-[300px] h-[200px] md:flex-1 md:h-[400px]">
          <img
            src="/img/mockup-compu.png"
            alt="Mockup computadora"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-none w-[300px] h-[200px] md:flex-1 md:h-[400px]">
          <img
            src="/img/mockup-sello.png"
            alt="Mockup sello"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Section contacto */}
      <section id="contacto" className="relative bg-[#1b263b] py-24 w-full">
        <div className="max-w-3xl mx-auto px-6 mt-20">
          <h2 className="text-4xl sm:text-5xl text-[#e0e1dd] font-lora font-semibold text-center mb-7">
            ¡Contactanos!
          </h2>
          <h3 className="text-xl sm:text-3xl text-[#e0e1dd] font-lora font-semibold text-center mb-6">
            ¿Tenés alguna consulta?
          </h3>
          <p className="text-[#e0e1dd] font-lora font-medium text-center mb-12 text-base leading-relaxed">
            Estamos para ayudarte. Completá el formulario y te responderemos a la brevedad.
          </p>

          <form
            ref={formRef}
            action="https://formsubmit.co/tomas.casas2001@gmail.com"
            method="POST"
            className="space-y-8 text-[#1b263b]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Nombre y Apellido"
                className="flex-1 px-4 py-3 rounded-md font-lora text-base"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Teléfono"
                className="flex-1 px-4 py-3 rounded-md font-lora text-base"
                required
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-md font-lora text-base"
              required
            />

            <textarea
              name="message"
              placeholder="Mensaje"
              className="w-full px-4 py-3 rounded-md font-lora text-base"
              rows={6}
              required
            ></textarea>

      
            <input type="text" name="_honey" style={{ display: "none" }} />

           
            <input
              type="hidden"
              name="_next"
              value="/gracias"
            />

            {/* Evitar captcha de FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="terms"
                className="mt-1"
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <label
                htmlFor="terms"
                className="text-[#e0e1dd] font-lora font-medium text-sm leading-snug"
              >
                Acepto que mis datos serán utilizados con el objetivo de brindarme
                servicios, productos y asistencia, conformes a la política de privacidad.
              </label>
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={!termsAccepted}
                className={`px-10 py-3 rounded-full font-lora font-semibold transition-all ${
                  termsAccepted
                    ? "bg-white text-[#1b263b] hover:bg-gray-100"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
              >
                Enviar consulta
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};
