import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './icons';

const SecurityBanner = () => {
    return (
        <section className="bg-teal-500 text-white">
            <div className="container mx-auto px-6 py-12 md:py-16">
            <div className="flex items-center justify-between gap-4">
                <button className="hidden md:block text-gray-800 hover:text-white transition-colors">
                <ChevronLeftIcon className="h-8 w-8" />
                </button>
                <p className="text-2xl md:text-3xl font-light text-center leading-relaxed">
                No solo te llevamos a tu destino, te llevamos con <strong className="font-semibold text-gray-800">seguridad</strong>, <strong className="font-semibold text-gray-800">comodidad</strong> y <strong className="font-semibold text-gray-800">confianza</strong> en cada kilómetro.
                </p>
                <button className="hidden md:block text-gray-800 hover:text-white transition-colors">
                <ChevronRightIcon className="h-8 w-8" />
                </button>
            </div>
            </div>
        </section>
    );
}

export default SecurityBanner;
