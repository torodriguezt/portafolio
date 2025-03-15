import React from "react";

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center items-center px-6 py-8 space-y-4">
      <h2 className="text-2xl font-semibold text-center">Experiencia Profesional</h2>
      <div className="space-y-4 max-w-2xl w-full">
        
        {/* Punto de experiencia - Analista de Datos */}
        <div>
          <h3 className="text-base font-semibold">Analista de Datos – Empresa XYZ</h3>
          <p className="text-xs text-gray-600">2022 - Actualidad</p>
          <p className="text-sm">Desarrollo de dashboards interactivos, automatización de reportes en SQL y generación de insights estratégicos.</p>
        </div>

        {/* Punto de experiencia - Asistente de Investigación */}
        <div>
          <h3 className="text-base font-semibold">Asistente de Investigación – Universidad ABC</h3>
          <p className="text-xs text-gray-600">2020 - 2022</p>
          <p className="text-sm">Participación en proyectos de investigación en ciencia de datos aplicados a la predicción de tendencias en el mercado. 
            Análisis estadístico, limpieza de datos y modelado predictivo utilizando Python y R.</p>
        </div>

      </div>
    </section>
  );
}
