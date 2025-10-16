import React from 'react';
import heroBg from '../assets/images/Banner.webp';

const Hero = () => {
    return (
        <div id="inicio" className="relative bg-gray-900">
            <main 
              className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${heroBg})` }}
            >
              {/* La capa de superposición fue eliminada. Puedes añadirla de nuevo si lo deseas. 
              <div className="bg-black bg-opacity-50 absolute inset-0"></div>
              */}
              <div className="z-10 relative text-center max-w-3xl px-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                  El viaje perfecto comienza con Ravel
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8">
                  Transporte confiable para escolares, empresas y turistas en Antioquia. Nuestra prioridad es tu seguridad y comodidad en cada trayecto.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                  <a href="#quienes-somos" className="border-2 border-white rounded-full px-8 py-3 font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Conoce más
                  </a>
                  <a href="#" className="bg-teal-500 rounded-full px-8 py-3 font-semibold hover:bg-teal-600 transition-colors">
                    Cotiza tu viaje
                  </a>
                </div>
              </div>
            </main>
        </div>
    );
}

export default Hero;
