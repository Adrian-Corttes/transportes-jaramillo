import React from 'react';
import { SocialIcon } from './icons';

const Footer = ({ navLinks, services }) => {
    return (
        <footer className="bg-primary text-white mt-16">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo e Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <div className="flex flex-col mb-4">
                            <a href="#" className="text-3xl font-bold tracking-wider">Transportes | Jaramillo</a>
                            <span className="text-xs text-gray-400">Hasta donde quieras llegar, vamos contigo</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            Comprometidos con tu seguridad y comodidad en cada viaje.
                        </p>
                    </div>

                    {/* Links Rápidos */}
                    <div>
                        <h3 className="font-semibold tracking-wider mb-4">Links Rápidos</h3>
                        <ul className="space-y-2">
                            {navLinks.map(link => (
                                <li key={`footer-${link.label}`}>
                                    <a href={link.href} className="text-gray-400 hover:text-white transition-colors text-sm">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Servicios */}
                    <div>
                        <h3 className="font-semibold tracking-wider mb-4">Servicios</h3>
                        <ul className="space-y-2">
                            {services.map(service => (
                                <li key={`footer-${service.title}`}>
                                    <a href="#servicios" className="text-gray-400 hover:text-white transition-colors text-sm">{service.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto y Redes */}
                    <div>
                        <h3 className="font-semibold tracking-wider mb-4">Contacto</h3>
                        <p className="text-gray-400 text-sm mb-4">Bello, Antioquia, Colombia</p>
                        <div className="flex space-x-4">
                            <SocialIcon href="#" path="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.94C2.33,8.43 3.11,9.75 4.26,10.54C3.54,10.52 2.87,10.31 2.29,10V10.03C2.29,12.08 3.75,13.79 5.7,14.19C5.35,14.28 4.98,14.33 4.6,14.33C4.33,14.33 4.07,14.3 3.81,14.26C4.35,15.91 5.89,17.07 7.77,17.11C6.31,18.25 4.47,19 2.39,19C2.07,19 1.74,18.98 1.42,18.94C3.32,20.21 5.59,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />
                            <SocialIcon href="#" path="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Transportes Jaramillo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;