import React from 'react';
import { WhatsAppIcon } from './icons';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573008138222"
      title="Contactar por WhatsApp"
      className="whatsapp-fab"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="w-8 h-8" />
      <span className="ml-2 font-semibold text-lg">Escribenos Ahora</span>
    </a>
  );
};

export default WhatsAppButton;
