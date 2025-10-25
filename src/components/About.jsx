import React from 'react';
import aboutUsImage from '../assets/images/ravel-quienes-somos-image.png';

const About = () => {
    return (
        <section id="quienes-somos" className="bg-background-light py-16 md:py-24">
            <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                
                <div className="md:w-1/2 text-center md:text-left">
                <p className="text-accent font-semibold tracking-widest mb-2 text-sm">NOSOTROS</p>
                <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">Camino Express N&N</h2>
                <p className="text-gray-700 mb-4">
                    Más que un servicio de transporte, somos tu aliado en cada trayecto.
                </p>
                <p className="text-gray-700 mb-6">
                    En Transportes Jaramillo no solo te llevamos a tu destino, te acompañamos en el camino.
                    Ofrecemos soluciones de movilidad para colegios, empresas, turistas e industrias, con el respaldo de una flota moderna y conductores certificados.
                    Cada viaje es sinónimo de seguridad, puntualidad y tranquilidad.
                </p>
                <p className="text-gray-700 mb-8">
                    Prestamos cobertura a nivel nacional con un servicio de alta calidad, garantizando que llegues a tu destino con la confianza de estar en manos expertas.
                </p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                    <a href="#" className="border-2 border-primary text-primary rounded-full px-8 py-3 font-semibold hover-bg-primary-important hover:text-white">
                    Conoce más
                    </a>
                    <a href="#" className="bg-accent text-primary rounded-full px-8 py-3 font-semibold hover:bg-yellow-500 transition-colors">
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
