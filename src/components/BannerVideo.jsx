import React from "react";
import { motion } from "framer-motion";
import videoBg from "../assets/images/videos.mp4"; // Ajusta la ruta según tu proyecto

const BannerVideo = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Video de fondo con efecto suave */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover brightness-110 contrast-110 saturate-125"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />

      {/* Capa oscura sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-semibold max-w-4xl mx-auto leading-snug drop-shadow-xl"
        >
          Viajar contigo es nuestra misión, hacerlo con confianza y comodidad es nuestro compromiso.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <a
            href="#contacto"
            className="bg-accent text-primary font-semibold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg"
          >
            Cotiza tu viaje
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BannerVideo;