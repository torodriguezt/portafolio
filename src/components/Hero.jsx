import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4 space-y-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
        className="text-5xl md:text-6xl font-bold text-gray-900">
        Hola, soy Tomás Rodríguez
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.2 }} 
        className="text-lg text-gray-600 max-w-xl">
        Científico de Datos apasionado por transformar datos en decisiones estratégicas mediante análisis, visualizaciones y machine learning.
      </motion.p>
    </section>
  );
}
