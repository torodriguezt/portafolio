import React from "react";

const projects = [
  {
    title: "Comercio Electrónico",
    desc: "Panel interactivo con KPIs para análisis de ventas por región y producto.",
  },
  {
    title: "Procesamiento de Lenguaje Natural para noticias",
    desc: "Segmentación de clientes usando clustering y árboles de decisión.",
  },
  {
    title: "Predicción de la contaminación España",
    desc: "Generación automatizada de reportes con pandas y envío por email.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center px-6 py-24">
      <h2 className="text-3xl font-semibold mb-12 text-center">Proyectos Destacados</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((proj, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-sm text-gray-600">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
