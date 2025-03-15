import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center px-6 py-24 space-y-10 text-center">
      <h2 className="text-3xl font-semibold">Contacto</h2>
      <p className="text-gray-600">¿Te interesa colaborar conmigo? ¡Conversemos!</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="mailto:ana.datos@email.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700">
          📧 ana.datos@email.com
        </a>
      </div>
    </section>
  );
}
