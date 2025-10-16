import React, { useState } from 'react';
import heroBg from './assets/Banner.webp';

// --- ICONOS SVG --- //

// Icono para el menú de hamburguesa (móvil)
const MenuIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

// Icono para cerrar el menú (móvil)
const CloseIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// Icono de flecha izquierda
const ChevronLeftIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

// Icono de flecha derecha
const ChevronRightIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// Icono para redes sociales
const SocialIcon = ({ href, path }) => (
    <a href={href} className="text-gray-400 hover:text-teal-500 transition-colors">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d={path} />
        </svg>
    </a>
);


// --- DATOS DE LA APLICACIÓN --- //

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: 'Quienes somos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#flota', label: 'Nuestra Flota' },
];
  
const services = [
    {
      imgSrc: "https://transravel.com/wp-content/uploads/2025/02/ravel-servicio-transporte-escolar-980x836.webp",
      title: "Transporte escolar",
      description: "Seguridad y puntualidad para los más pequeños. Conductores certificados y monitoreo en cada ruta."
    },
    {
      imgSrc: "https://transravel.com/wp-content/uploads/2025/02/ravel-servicio-transporte-empresarial-980x836.webp",
      title: "Transporte empresarial",
      description: "Moviliza a tu equipo con comodidad y eficiencia. Rutas personalizadas y servicio confiable."
    },
    {
      imgSrc: "https://transravel.com/wp-content/uploads/2025/02/ravel-servicio-transporte-turistico-980x836.webp",
      title: "Transporte turístico",
      description: "Descubre Antioquia sin preocupaciones. Viajes cómodos, puntuales y seguros y a la medida de tu plan."
    },
    {
      imgSrc: "https://transravel.com/wp-content/uploads/2025/02/ravel-servicios-ingenieria.webp",
      title: "Transporte para ingenierías",
      description: "Traslada a tu equipo técnico con seguridad y precisión. Vehículos equipados y rutas adaptadas a cada proyecto."
    }
];

const carouselBanners = [
  {
    imgSrc: "https://transravel.com/wp-content/uploads/2025/04/Master-Turismo.webp",
    title: "Van Renault Master",
    description: "Comodidad, espacio y seguridad para cada trayecto. Esta van es perfecta para transporte turístico, viajes corporativos, traslados de grupos o eventos especiales. Ideal para quienes buscan moverse en grupo con total tranquilidad y confort."
  },
  {
    imgSrc: "https://transravel.com/wp-content/uploads/2025/04/Duster-ingenieria-o-servicio-privado.webp",
    title: "Renault Duster",
    description: "Robusta, versátil y lista para cualquier terreno. Ideal para labores de ingeniería, visitas técnicas o servicios privados en zonas urbanas y rurales. Su desempeño y comodidad la convierten en la aliada perfecta para el trabajo diario con estilo y confianza."
  },
  {
    imgSrc: "https://transravel.com/wp-content/uploads/2025/04/UBAN-Escolar.webp",
    title: "Transporte Escolar Dedicado",
    description: "Vehículos especializados para el transporte escolar, garantizando la máxima seguridad y confort para los estudiantes en su recorrido diario, con todas las normativas vigentes para su tranquilidad."
  }
];

const clientLogos = [
  { src: "https://transravel.com/wp-content/uploads/2025/02/ravel-clientes-4.webp", alt: "Logo Cliente 1" },
  { src: "https://transravel.com/wp-content/uploads/2025/02/ravel-clientes-13.webp", alt: "Logo Cliente 2" },
  { src: "https://transravel.com/wp-content/uploads/2025/02/ravel-clientes-19.webp", alt: "Logo Cliente 3" },
  { src: "https://transravel.com/wp-content/uploads/2025/02/ravel-clientes-1.webp", alt: "Logo Cliente 4" },
];

// --- COMPONENTE PRINCIPAL --- //

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <div className="bg-gray-50 font-sans">
      {/* Encabezado y Sección Hero */}
      <div id="inicio" className="relative bg-gray-900">
        {/* Encabezado */}
        <header className="absolute top-0 left-0 right-0 z-20 text-white">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            
            {/* Logo */}
            <div className="flex flex-col">
              <a href="#" className="text-3xl font-bold tracking-wider">Ravel</a>
              <span className="text-xs text-gray-300">donde quieras llegar</span>
            </div>

            {/* Navegación para escritorio */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-teal-400 transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Botones para escritorio */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="border border-white rounded-full px-5 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">
                Pagos transporte escolar
              </a>
              <a href="#" className="bg-teal-500 rounded-full px-5 py-2 text-sm hover:bg-teal-600 transition-colors">
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
            <div className="md:hidden bg-gray-900 bg-opacity-95">
              <div className="container mx-auto px-6 py-4 flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className="hover:text-teal-400 transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {link.label}
                  </a>
                ))}
                <a href="#" className="border border-white rounded-full w-full text-center px-5 py-2 text-sm hover:bg-white hover:text-gray-900 transition-colors">
                  Pagos transporte escolar
                </a>
                <a href="#" className="bg-teal-500 rounded-full w-full text-center px-5 py-2 text-sm hover:bg-teal-600 transition-colors">
                  Cotiza tu viaje
                </a>
              </div>
            </div>
          )}
        </header>

        {/* Sección Hero */}
        <main 
          className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="bg-black bg-opacity-90 absolute inset-0"></div>
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

      {/* Sección ¿Qué es Ravel? */}
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
                src="https://transravel.com/wp-content/uploads/2025/02/ravel-quienes-somos-image.webp" 
                alt="Van de Transportes Ravel"
                className="rounded-lg w-full h-auto"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Banner de Seguridad */}
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

      {/* Sección de Servicios */}
       <section id="servicios" className="py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
            <p className="text-teal-500 font-semibold tracking-widest mb-2 text-sm">SERVICIO DE EXCELENCIA EN TRANSPORTE ESPECIAL</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Servicios de transporte especial</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105">
                        <img src={service.imgSrc} alt={service.title} className="w-full h-48 object-cover" />
                        <div className="p-6 flex flex-col items-center text-center flex-grow">
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{service.description}</p>
                            
                            <div className="mt-auto w-full">
                                {service.title === "Transporte para ingenierías" ? (
                                    <a href="#" className="bg-green-500 text-white rounded-full w-full inline-block px-6 py-2.5 font-semibold hover:bg-green-600 transition-colors text-sm">
                                        Escríbenos ahora
                                    </a>
                                ) : (
                                    <div className="w-full flex flex-col gap-2">
                                        <a href="#" className="bg-teal-500 text-white rounded-full w-full px-6 py-2.5 font-semibold hover:bg-teal-600 transition-colors text-sm">
                                            Reserva ahora
                                        </a>
                                        <a href="#" className="border-2 border-gray-300 text-gray-800 rounded-full w-full px-6 py-2.5 font-semibold hover:bg-gray-200 transition-colors text-sm">
                                            Conoce más
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

    {/* Sección Carrusel Flota */}
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

    {/* Sección Clientes */}
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

    {/* Footer */}
    <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Logo e Info */}
                <div className="col-span-1 lg:col-span-1">
                    <div className="flex flex-col mb-4">
                        <a href="#" className="text-3xl font-bold tracking-wider">Ravel</a>
                        <span className="text-xs text-gray-400">donde quieras llegar</span>
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
                <p>&copy; {new Date().getFullYear()} Transportes Ravel. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
    </div>
  );
}

export default App;

