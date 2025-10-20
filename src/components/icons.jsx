
// Icono para el menú de hamburguesa (móvil)
export const MenuIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
  
  // Icono para cerrar el menú (móvil)
  export const CloseIcon = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
  
  // Icono de flecha izquierda
  export const ChevronLeftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  );
  
  // Icono de flecha derecha
  export const ChevronRightIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  );
  
  // Icono para redes sociales
  export const SocialIcon = ({ href, path }) => (
      <a href={href} className="text-gray-400 hover:text-teal-500 transition-colors">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d={path} />
          </svg>
      </a>
  );

// Icono de WhatsApp
export const WhatsAppIcon = ({ className }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.61 15.35 3.48 16.84L2 22L7.32 20.55C8.77 21.33 10.37 21.8 12.04 21.8C17.5 21.8 21.95 17.35 21.95 11.81C21.95 6.35 17.5 2 12.04 2ZM12.04 20.1C10.58 20.1 9.15 19.68 7.9 18.88L7.54 18.66L4.5 19.5L5.38 16.58L5.14 16.21C4.26 14.88 3.83 13.34 3.83 11.81C3.83 7.36 7.51 3.68 12.04 3.68C16.57 3.68 20.25 7.36 20.25 11.81C20.25 16.26 16.57 20.1 12.04 20.1ZM16.53 14.3C16.29 14.18 15.09 13.58 14.88 13.5C14.67 13.42 14.52 13.38 14.37 13.62C14.22 13.86 13.72 14.46 13.57 14.61C13.42 14.76 13.28 14.79 13.03 14.67C12.78 14.55 11.91 14.24 10.88 13.33C10.06 12.61 9.51 11.73 9.36 11.49C9.21 11.25 9.33 11.13 9.45 11.01C9.56 10.9 9.7 10.73 9.83 10.58C9.96 10.43 10.01 10.31 10.11 10.11C10.21 9.91 10.16 9.74 10.09 9.65C10.02 9.56 9.57 8.41 9.39 7.96C9.22 7.51 9.04 7.58 8.89 7.57C8.75 7.57 8.6 7.57 8.45 7.57C8.3 7.57 8.06 7.62 7.84 7.84C7.63 8.06 7.13 8.54 7.13 9.71C7.13 10.88 7.87 11.99 8 12.14C8.13 12.29 9.56 14.54 11.8 15.49C12.31 15.7 12.7 15.81 12.99 15.9C13.48 16.03 13.91 15.99 14.23 15.91C14.6 15.82 15.61 15.27 15.82 14.98C16.03 14.69 16.03 14.46 15.98 14.38C15.93 14.3 15.78 14.26 15.53 14.14L15.54 14.13L16.53 14.3Z" />
    </svg>
  );
