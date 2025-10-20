import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Clients from './components/Clients';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// --- DATOS DE LA APLICACIÓN --- //

const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#quienes-somos', label: 'Quienes somos' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#flota', label: 'Nuestra Flota' },
];

const services = [
    {
      title: "Transporte escolar",
    },
    {
      title: "Transporte empresarial",
    },
    {
      title: "Transporte turístico",
    },
    {
      title: "Transporte para ingenierías",
    }
];

function App() {
  return (
    <div className="bg-gray-50 font-sans">
      <Header navLinks={navLinks} />
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Clients />
      <Footer navLinks={navLinks} services={services} />
      <WhatsAppButton />
    </div>
  );
}

export default App;