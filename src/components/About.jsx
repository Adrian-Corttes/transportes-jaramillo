import React from 'react';
import aboutUsImage from '../assets/images/ravel-quienes-somos-image.webp';

const About = () => {
    return (
        <section id="quienes-somos" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                <div className="md:w-1/2 text-center md:text-left">
                <p className="text-teal-500 font-semibold tracking-widest mb-2 text-sm">DESCUBRE RAVEL</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">¿Qué es Ravel?</h2>
                <p className="text-gray-600 mb-4">
                    Más que un servicio de transporte, somos tu aliado en cada trayecto.
                </p>
                <p className="text-gray-600 mb-6">
                    En Transportes Ravel, nos enorgullece ofrecer mucho más que solo un viaje; somos el motor que te lleva con seguridad, puntualidad y comodidad, ya sea en traslados escolares, empresariales, turísticos o para ingenierías. Con nuestra flota moderna y conductores capacitados, te garantizamos un viaje sin obstáculos.
                </p>
                <p className="text-gray-600 mb-8">
                    Cubrimos todo el territorio nacional con un servicio de primer nivel, asegurando que llegues a tu destino con la tranquilidad de estar en las mejores manos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <a href="#" className="border-2 border-gray-800 text-gray-800 rounded-full px-8 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                    Conoce más
                    </a>
                    <a href="#" className="bg-teal-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-teal-600 transition-colors">
                    Reservar ahora
                    </a>
                </div>
                </div>

                <div className="md:w-1/2 mt-8 md:mt-0">
                <img 
                    src={aboutUsImage} 
                    alt="Van de Transportes Ravel"
                    className="rounded-lg w-full h-auto"
                />
                </div>

            </div>
            </div>
        </section>
    );
}

export default About;
