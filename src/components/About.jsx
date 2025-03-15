import React from "react";

export default function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center items-center px-6 py-24 space-y-6 text-center">
      <h2 className="text-3xl font-semibold">Sobre mí</h2>
      <p className="max-w-2xl text-gray-600">
        Con experiencia en analítica de negocio, automatización de reportes y ciencia de datos, 
        me especializo en convertir grandes volúmenes de datos en valor para las organizaciones. 
        Domino Python, SQL, Power BI y técnicas de machine learning.
      </p>
    </section>
  );
}
