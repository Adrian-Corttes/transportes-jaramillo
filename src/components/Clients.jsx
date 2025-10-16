import React from 'react';
import clientLogo1 from '../assets/images/ravel-clientes-4.webp';
import clientLogo2 from '../assets/images/ravel-clientes-13.webp';
import clientLogo3 from '../assets/images/ravel-clientes-19.webp';
import clientLogo4 from '../assets/images/ravel-clientes-1.webp';

const clientLogos = [
    { src: clientLogo1, alt: "Logo Cliente 1" },
    { src: clientLogo2, alt: "Logo Cliente 2" },
    { src: clientLogo3, alt: "Logo Cliente 3" },
    { src: clientLogo4, alt: "Logo Cliente 4" },
  ];

const Clients = () => {
    return (
        <section id="clientes" className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 text-center">
                <p className="text-teal-500 font-semibold tracking-widest mb-2 text-sm uppercase">Recomendados por los mejores</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Estas empresas confían en Ravel</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {clientLogos.map((logo, index) => (
                        <div key={index} className="flex justify-center grayscale hover:grayscale-0 transition duration-300">
                            <img 
                                src={logo.src} 
                                alt={logo.alt}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Clients;
