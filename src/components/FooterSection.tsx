import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const FooterSection = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Columna 1: Acerca de */}
          <div>
            <h2 className="text-xl font-bold mb-4">Yamila Velay</h2>
            <p className="text-gray-300 mb-6">
              Facilitando tu conexión energética y espiritual para una vida
              plena en armonía con el universo.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-300 hover:text-accent transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Enlaces útiles */}
          <div>
            <h2 className="text-xl font-bold mb-4">Enlaces Útiles</h2>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#quien-soy"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Quién Soy
                </a>
              </li>
              <li>
                <a
                  href="#sesiones"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Sesiones
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Cursos
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contacto</h2>
            <ul className="space-y-3">
              <li className="flex">
                <Mail size={20} className="mr-3 text-primary" />
                <a
                  href="mailto:hola@universointerioor.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  yamilavelaykira@gmail.com
                </a>
              </li>
              <li className="flex">
                <Phone size={20} className="mr-3 text-primary" />
                <a
                  href="tel:+5491159043085"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +5491159043085
                </a>
              </li>
              <li className="flex">
                <MapPin size={20} className="mr-3 text-primary" />
                <span className="text-gray-300">
                  Qulmes, Buenos Aires, Argentina (Sesiones online disponibles)
                </span>
              </li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
{/*           <div></div>
 */}        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Yamila, Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
