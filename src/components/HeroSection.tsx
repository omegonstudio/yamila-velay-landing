import React from "react";
import ShaderCanvas from "@/components/ui/ShaderCanvas";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section
    id="hero"
    className="relative min-h-screen flex items-center justify-center bg-secondary text-white py-20 px-4 sm:px-6 lg:px-8"
  >
    {/* Fondo de shader */}
    <div className="absolute inset-0 -z-15 overflow-hidden">
      <ShaderCanvas />
      {/* Puedes mantener tus círculos flotantes si quieres */}
   
    </div>

    {/* Contenido */}
    <div className="max-w-4xl mx-auto text-center relative">
      <h1 className="text-4xl md:text-7xl font-bold mb-14 leading-tight">
        Conexión con el{" "}
        <span className="bg-clip-text text-transparent bg-cosmic-gradient">
          Universo
        </span>{" "}
        y tu Energía Interior
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
        Acompaño tu proceso de evolución personal y espiritual, ayudándote a conectar
        con tu esencia y las energías cósmicas que te rodean para lograr una transformación
        profunda.
      </p>
      <Button
        size="lg"
        className="bg-primary hover:bg-primary-dark text-white transition-all duration-300 shadow-lg hover:shadow-primary/30"
        onClick={() =>
          document.getElementById("sesiones")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        Descubre Mis Sesiones
      </Button>
    </div>
  </section>
);

export default HeroSection;
