
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    id: 1,
    title: "Sesión de Alineación Energética",
    duration: "60 minutos",
    price: "$85",
    description: "Equilibra tus centros energéticos eliminando bloqueos y armonizando el flujo de energía vital. Perfecto para quienes experimentan cansancio, falta de claridad o desequilibrios emocionales.",
    benefits: ["Equilibrio energético", "Claridad mental", "Bienestar emocional", "Conexión interior"],
    icon: "✨"
  },
  {
    id: 2,
    title: "Coaching de Conexión Cósmica",
    duration: "90 minutos",
    price: "$120",
    description: "Una sesión personalizada para ayudarte a establecer una comunicación profunda con tu esencia y las energías universales. Desarrolla tu intuición y expande tu consciencia espiritual.",
    benefits: ["Expansión de consciencia", "Desarrollo intuitivo", "Conexión espiritual", "Guía personalizada"],
    icon: "🌌"
  },
  {
    id: 3,
    title: "Sanación de Vidas Pasadas",
    duration: "120 minutos",
    price: "$150",
    description: "Explora y sana patrones limitantes arraigados en experiencias pasadas. Resuelve conflictos kármicos y libera cargas energéticas que afectan tu presente.",
    benefits: ["Liberación de patrones", "Sanación profunda", "Resolución kármica", "Integración energética"],
    icon: "🔮"
  },
  {
    id: 4,
    title: "Meditación Guiada Personalizada",
    duration: "45 minutos",
    price: "$65",
    description: "Aprende técnicas de meditación adaptadas a tus necesidades para conectar con tu paz interior y elevar tu vibración energética. Incluye grabación para práctica en casa.",
    benefits: ["Técnicas personalizadas", "Grabación exclusiva", "Elevación vibracional", "Práctica diaria"],
    icon: "🧘‍♀️"
  }
];

const SessionsSection = () => {
  return (
    <section id="sesiones" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 star-bg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Mis Sesiones</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experiencias transformadoras diseñadas para guiarte en tu camino de evolución personal y conexión energética
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sessions.map((session) => (
            <Card key={session.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow cosmic-card">
              <CardHeader className="bg-primary-dark text-white pb-3 pt-6">
                <div className="text-3xl mb-2 w-12 h-12 rounded-full bg-accent flex items-center justify-center mx-auto">
                  {session.icon}
                </div>
                <CardTitle className="text-center text-2xl">{session.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4 text-gray-600 text-sm font-medium">
                  <span>{session.duration}</span>
                  <span className="text-xl text-primary-dark font-bold">{session.price}</span>
                </div>
                
                <p className="text-gray-700 mb-4">
                  {session.description}
                </p>
                
                <ul className="space-y-2">
                  {session.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <span className="text-primary mr-2">•</span> 
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="border-t border-gray-100 p-6">
                <Button className="w-full bg-primary hover:bg-primary-dark text-white">
                  Reservar Sesión
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿No estás seguro de qué sesión es adecuada para ti? Agenda una llamada de 15 minutos para descubrir qué opción se alinea mejor con tus necesidades.
          </p>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary-light/10">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SessionsSection;
