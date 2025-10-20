import React from "react";
import serviceEscolar from "../assets/images/ravel-servicio-transporte-escolar-980x836.webp";
import serviceEmpresarial from "../assets/images/ravel-servicio-transporte-empresarial-980x836.webp";
import serviceTuristico from "../assets/images/ravel-servicio-transporte-turistico-980x836.webp";
import serviceIngenieria from "../assets/images/ravel-servicios-ingenieria.webp";

const services = [
  {
    imgSrc: serviceEscolar,
    title: "Transporte escolar",
    description:
      "Seguridad y puntualidad para los más pequeños. Conductores certificados y monitoreo en cada ruta.",
  },
  {
    imgSrc: serviceEmpresarial,
    title: "Transporte empresarial",
    description:
      "Moviliza a tu equipo con comodidad y eficiencia. Rutas personalizadas y servicio confiable.",
  },
  {
    imgSrc: serviceTuristico,
    title: "Transporte turístico",
    description:
      "Descubre Antioquia sin preocupaciones. Viajes cómodos, puntuales y seguros y a la medida de tu plan.",
  },
  {
    imgSrc: serviceIngenieria,
    title: "Transporte para ingenierías",
    description:
      "Traslada a tu equipo técnico con seguridad y precisión. Vehículos equipados y rutas adaptadas a cada proyecto.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container mx-auto px-6 text-center">
        <p className="text-accent font-semibold tracking-widest mb-2 text-sm">
          SERVICIO DE EXCELENCIA EN TRANSPORTE ESPECIAL
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-12">
          Servicios de transporte especial
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-105"
            >
              <img
                src={service.imgSrc}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col items-center text-center flex-grow">
                <h3 className="text-xl font-bold text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="mt-auto w-full">
                  {service.title === "Transporte para ingenierías" ? (
                    <a
                      href="#"
                      className="bg-accent text-primary rounded-full w-full inline-block px-6 py-2.5 font-semibold hover:bg-yellow-500 transition-colors text-sm"
                    >
                      Escríbenos ahora
                    </a>
                  ) : (
                    <div className="w-full flex flex-col gap-2">
                      <a
                        href="#"
                        className="bg-accent text-primary rounded-full w-full px-6 py-2.5 font-semibold hover:bg-yellow-500 transition-colors text-sm"
                      >
                        Reserva ahora
                      </a>
                      <a
                        href="#"
                        className="border-2 border-primary text-primary rounded-full w-full px-6 py-2.5 font-semibold hover-bg-primary-important hover:text-white text-sm"
                      >
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
  );
};

export default Services;
