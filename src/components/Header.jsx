import React, { useState } from 'react';
import { MenuIcon, CloseIcon } from './icons';

const Header = ({ navLinks }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-20 text-white">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                
                {/* Logo */}
                <div className="flex flex-col">
                <a href="#" className="text-3xl font-bold tracking-wider">Camino Express N&N</a>
                <span className="text-xs text-gray-300">Màs que transporte somos conexiòn</span>
                </div>

                {/* Navegación para escritorio */}
                <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-accent transition-colors">
                    {link.label}
                    </a>
                ))}
                </nav>

                {/* Botones para escritorio */}
                <div className="hidden md:flex items-center space-x-4">
                <a href="#" className="border border-accent rounded-full px-5 py-2 text-sm hover:bg-accent hover:text-primary transition-colors">
                    Pagos transporte escolar
                </a>
                <a href="#" className="bg-accent text-primary rounded-full px-5 py-2 text-sm hover:bg-yellow-500 transition-colors">
                    Cotiza tu viaje
                </a>
                </div>

                {/* Botón de menú para móvil */}
                <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                </button>
                </div>
            </div>
            
            {/* Menú para móvil */}
            {isMenuOpen && (
                <div className="md:hidden bg-primary bg-opacity-95">
                <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                    <a key={link.label} href={link.href} className="hover:text-accent transition-colors" onClick={() => setIsMenuOpen(false)}>
                        {link.label}
                    </a>
                    ))}
                    <a href="#" className="border border-accent rounded-full w-full text-center px-5 py-2 text-sm hover:bg-accent hover:text-primary transition-colors">
                    Pagos transporte escolar
                    </a>
                    <a href="#" className="bg-accent text-primary rounded-full w-full text-center px-5 py-2 text-sm hover:bg-yellow-500 transition-colors">
                    Cotiza tu viaje
                    </a>
                </div>
                </div>
            )}
        </header>
    );
}

export default Header;
