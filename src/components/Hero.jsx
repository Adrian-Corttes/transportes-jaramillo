import React from "react";
import heroBg from "../assets/images/Banner.webp";

const Hero = () => {
  return (
    <div id="inicio" className="relative bg-primary">
      <main
        className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        {/* Degradado desde arriba */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f2a30]/80 to-transparent"></div>

        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Movemos tus sueños, guiamos tu camino
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Seguridad y comodidad en cada viaje, transporte para escolares,
            empresas y turistas, Antioquia se mueve con nosotros.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="#quienes-somos"
              className="border-2 border-accent rounded-full px-8 py-3 font-semibold hover:bg-accent hover:text-primary transition-colors"
            >
              Conoce más
            </a>
            <a
              href="#"
              className="bg-accent rounded-full px-8 py-3 font-semibold text-primary hover:bg-yellow-500 transition-colors"
            >
              Cotiza tu viaje
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
