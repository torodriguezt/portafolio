import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md p-4 flex justify-center gap-6 text-sm font-medium">
      <a href="#about" className="hover:text-blue-600">Sobre mí</a>
      <a href="#projects" className="hover:text-blue-600">Proyectos</a>
      <a href="#experience" className="hover:text-blue-600">Experiencia</a>
      <a href="#contact" className="hover:text-blue-600">Contacto</a>
    </nav>
  );
}
