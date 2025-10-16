import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';
import fleetMaster from '../assets/images/Master-Turismo.webp';
import fleetDuster from '../assets/images/Duster-ingenieria-o-servicio-privado.webp';
import fleetEscolar from '../assets/images/UBAN-Escolar.webp';

const carouselBanners = [
    {
      imgSrc: fleetMaster,
      title: "Van Renault Master",
      description: "Comodidad, espacio y seguridad para cada trayecto. Esta van es perfecta para transporte turístico, viajes corporativos, traslados de grupos o eventos especiales. Ideal para quienes buscan moverse en grupo con total tranquilidad y confort."
    },
    {
      imgSrc: fleetDuster,
      title: "Renault Duster",
      description: "Robusta, versátil y lista para cualquier terreno. Ideal para labores de ingeniería, visitas técnicas o servicios privados en zonas urbanas y rurales. Su desempeño y comodidad la convierten en la aliada perfecta para el trabajo diario con estilo y confianza."
    },
    {
      imgSrc: fleetEscolar,
      title: "Transporte Escolar Dedicado",
      description: "Vehículos especializados para el transporte escolar, garantizando la máxima seguridad y confort para los estudiantes en su recorrido diario, con todas las normativas vigentes para su tranquilidad."
    }
  ];

const Fleet = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === carouselBanners.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? carouselBanners.length - 1 : prev - 1));
    };

    const goToSlide = (slideIndex) => {
        setCurrentSlide(slideIndex);
    };

    return (
        <section id="flota" className="bg-gray-50 py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <p className="text-teal-500 font-semibold tracking-widest mb-2 text-sm uppercase">Siempre a la vanguardia</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Nuestra flota Ravel</h2>
                
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden relative rounded-lg">
                        <div 
                            className="flex transition-transform duration-500 ease-in-out" 
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {carouselBanners.map((banner, index) => (
                                <div key={index} className="w-full flex-shrink-0 p-4">
                                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-white p-8 rounded-lg shadow-lg">
                                        <div className="md:w-1/2">
                                            <img src={banner.imgSrc} alt={banner.title} className="rounded-md w-full h-auto object-contain max-h-80" />
                                        </div>
                                        <div className="md:w-1/2 text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{banner.title}</h3>
                                            <p className="text-gray-600 mb-6">{banner.description}</p>
                                            <a href="#" className="bg-teal-500 text-white rounded-full px-8 py-3 font-semibold hover:bg-teal-600 transition-colors inline-block">
                                                Reserva ahora
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 md:-left-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10">
                        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 md:-right-12 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10">
                        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
                    </button>

                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                        {carouselBanners.map((_, index) => (
                            <button 
                                key={index} 
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentSlide === index ? 'bg-teal-500' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Ir a la diapositiva ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Fleet;
