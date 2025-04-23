
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const courses = [
  {
    id: 1,
    title: "Despertar Interior: Fundamentos de la Conexión Cósmica",
    level: "Principiante",
    duration: "6 semanas",
    description: "Aprende los principios básicos para establecer una conexión consciente con tu energía interna y las fuerzas universales. Un curso ideal para comenzar tu camino espiritual.",
    features: ["6 módulos en video", "Meditaciones guiadas", "Manual digital", "Comunidad privada"],
    status: "Inscripciones abiertas",
    highlight: false,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Maestría Energética: Evolución y Transmutación",
    level: "Avanzado",
    duration: "8 semanas",
    description: "Profundiza en prácticas avanzadas de manejo energético para catalizar tu evolución espiritual. Aprende técnicas ancestrales y modernas para elevar tu vibración.",
    features: ["8 módulos intensivos", "Sesiones en vivo", "Kit energético físico", "Certificación digital"],
    status: "Cupos limitados",
    highlight: true,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Sanación Karmica: Liberando Patrones Ancestrales",
    level: "Intermedio",
    duration: "10 semanas",
    description: "Un viaje transformador para identificar y liberar cargas kármicas que afectan tu presente. Aprende a romper ciclos repetitivos y manifestar nuevas realidades.",
    features: ["10 módulos de profundización", "Rituales guiados", "Lecturas energéticas", "Soporte personalizado"],
    status: "Próximamente",
    highlight: false,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80"
  }
];

const CoursesSection = () => {
  return (
    <section id="cursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-light">Mis Cursos</h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-light">
            Programas de formación que combinan sabiduría ancestral y técnicas modernas para tu desarrollo energético y espiritual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card 
              key={course.id} 
              className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-courses-gradient ${
                course.highlight ? 'bg-higthlight-gradient transform hover:-translate-y-2' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={`Imagen del curso: ${course.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    className={`${
                      course.status === 'Inscripciones abiertas' ? 'bg-accent text-secondary' :
                      course.status === 'Cupos limitados' ? 'bg-primary text-white' :
                      'bg-muted text-secondary'
                    }`}
                  >
                    {course.status}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="outline" className="bg-primary-light/10 text-primary-dark border-primary-light">
                    {course.level}
                  </Badge>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
                <CardTitle className="text-xl text-secondary">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-1">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-primary mr-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  variant={course.status === 'Próximamente' ? 'outline' : 'default'}
                  className={`w-full ${
                    course.status === 'Próximamente' 
                      ? 'border-primary text-primary hover:bg-primary-light/10' 
                      : 'bg-primary hover:bg-primary-dark text-white'
                  }`}
                  disabled={course.status === 'Próximamente'}
                >
                  {course.status === 'Próximamente' ? 'Recibir Información' : 'Inscribirme Ahora'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-secondary-dark rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-secondary-foreground mb-4">¿Buscas formación personalizada?</h3>
          <p className="text-secondary-foreground mb-6  text-xl max-w-4xl mx-auto">
            Ofrezco programas de mentoría a medida para personas que desean una guía personalizada en su camino espiritual o profesionales holísticos que quieren profundizar en técnicas específicas.
          </p>
          <Button size="lg" className="bg-accent text-secondary hover:bg-accent/80">
            Solicitar Programa Personalizado
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
