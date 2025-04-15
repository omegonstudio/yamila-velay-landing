
import React from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center star-bg bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary/20 animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "1.5s" }}></div>
          <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-muted/20 animate-float" style={{ animationDelay: "2.5s" }}></div>
        </div>
        
        <span className="block text-accent font-light mb-3 animate-pulse-slow">Descubre tu</span>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Conexión con el <span className="bg-clip-text text-transparent bg-cosmic-gradient">Universo</span> y tu Energía Interior
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Acompaño tu proceso de evolución personal y espiritual, ayudándote a conectar con tu esencia y las energías cósmicas que te rodean para lograr una transformación profunda.
        </p>
        
        <Button 
          size="lg" 
          className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 shadow-lg hover:shadow-primary/30"
          onClick={() => document.getElementById('sesiones')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Descubre Mis Sesiones
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
