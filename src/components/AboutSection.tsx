
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="quien-soy" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">Quién Soy</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre cómo mi camino espiritual y conocimientos holísticos pueden ayudar en tu transformación personal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold mb-5 text-secondary">
              Guía espiritual y facilitadora de conexiones cósmicas
            </h3>
            
            <p className="text-gray-700 mb-4">
              Mi nombre es Yamila y llevo más de una década dedicándome al <strong>coaching holístico</strong> y las prácticas espirituales. Mi camino comenzó tras un profundo despertar personal que me llevó a estudiar diversas disciplinas energéticas y ancestrales.
            </p>
            
            <p className="text-gray-700 mb-4">
              Soy especialista en <strong>alineación energética</strong>, conectando los principios universales con tu realidad cotidiana para facilitar transformaciones profundas y duraderas. Mi enfoque integra sabiduría antigua con técnicas modernas para el desarrollo personal.
            </p>
            
            <p className="text-gray-700 mb-8">
              A través de mi trabajo, he ayudado a cientos de personas a recuperar su equilibrio interior, desarrollar su intuición y establecer una <strong>conexión cósmica</strong> genuina que les permite manifestar su máximo potencial.
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {["Coaching Holístico", "Alineación Energética", "Meditación", "Conexión Cósmica", "Sanación Espiritual"].map((skill, index) => (
                <span key={index} className="px-3 py-1 rounded-full bg-primary/10 text-primary-dark text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl cosmic-card">
                <img 
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80" 
                  alt="Yamila, especialista en coaching holístico y conexión cósmica" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-accent flex items-center justify-center text-secondary font-bold">
                10+ años
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            {
              title: "Coaching Holístico",
              description: "Integro herramientas de diversas disciplinas espirituales y energéticas para guiar tu crecimiento personal."
            },
            {
              title: "Sanación Energética",
              description: "Trabajo con las energías sutiles para limpiar bloqueos y restablecer el flujo armonioso en todos los niveles de tu ser."
            },
            {
              title: "Guía Espiritual",
              description: "Acompaño tu despertar espiritual, ayudándote a encontrar respuestas y conexión con tu yo superior y el universo."
            }
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow cosmic-card">
              <CardContent className="p-6 bg-card-gradient">
                <h3 className="text-xl font-semibold mb-3 text-secondary">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
