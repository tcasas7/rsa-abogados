"use client";
import React, { useRef, useState } from "react";

export const Contacto = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const response = await fetch("https://formsubmit.co/tomas.casas2001@gmail.com", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      formRef.current?.reset();
      setShowModal(true);
      setTermsAccepted(false);
    } else {
      alert("Error al enviar el formulario. Intenta nuevamente.");
    }
  };

  return (
    <>
      {/* ...mockups aquí... */}

      <section id="contacto" className="relative bg-[#1b263b] py-24 w-full">
        <div className="max-w-3xl mx-auto px-6 mt-20">
          {/* Título y subtítulo */}
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
            onSubmit={handleSubmit}
            className="space-y-8 text-[#1b263b]"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="text" name="name" placeholder="Nombre y Apellido" required
                className="flex-1 px-4 py-3 rounded-md font-lora text-base" />
              <input type="tel" name="phone" placeholder="Teléfono" required
                className="flex-1 px-4 py-3 rounded-md font-lora text-base" />
            </div>

            <input type="email" name="email" placeholder="Correo electrónico" required
              className="w-full px-4 py-3 rounded-md font-lora text-base" />

            <textarea name="message" placeholder="Mensaje" rows={6} required
              className="w-full px-4 py-3 rounded-md font-lora text-base" />

            {/* Bot honeypot */}
            <input type="text" name="_honey" style={{ display: "none" }} />

            {/* Aceptar términos */}
            <div className="flex items-start gap-2">
              <input type="checkbox" id="terms" className="mt-1" onChange={(e) => setTermsAccepted(e.target.checked)} />
              <label htmlFor="terms"
                className="text-[#e0e1dd] font-lora font-medium text-sm leading-snug">
                Acepto que mis datos serán utilizados con el objetivo de brindarme servicios, productos y asistencia, conformes a la política de privacidad.
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

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="bg-[#253654] text-[#e0e1dd] p-10 rounded-lg text-center max-w-md w-full mx-4 animate-fade-in">
            <h2 className="text-3xl font-lora font-bold mb-4">
              ¡Gracias por su consulta!
            </h2>
            <p className="text-lg font-lora mb-6">
              Le responderemos a la brevedad.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 rounded-full bg-white text-[#1b263b] font-lora font-semibold transition-all hover:bg-gray-100"
            >
              Volver
            </button>
          </div>
        </div>
      )}
    </>
  );
};
