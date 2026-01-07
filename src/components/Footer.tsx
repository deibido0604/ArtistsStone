import { Facebook, Heart, Instagram } from "lucide-react";
import TikTokIcon from "./TikTokIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-10 w-10 bg-gradient-to-r from-amber-600 to-amber-800 rounded-full"></div>
              <div>
                <h2 className="text-2xl font-bold">Stone Artists</h2>
                <p className="text-stone-400 text-sm">
                  Muebles de granito y más
                </p>
              </div>
            </div>
            <p className="text-stone-400 mb-6">
              Transformamos espacios con muebles de granito, comedores y baños
              de la más alta calidad.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=100065388912790"
                className="bg-stone-800 hover:bg-amber-600 p-2 rounded-full transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/stoneartistshn?igsh=MXcwNnF3a3l3ZGdhNw=="
                className="bg-stone-800 hover:bg-amber-600 p-2 rounded-full transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://vm.tiktok.com/ZMHENdD9kgEt4-gVc35/"
                className="bg-stone-800 hover:bg-amber-600 p-2 rounded-full transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              {/* <a
                href="#"
                className="bg-stone-800 hover:bg-amber-600 p-2 rounded-full transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-stone-800 hover:bg-amber-600 p-2 rounded-full transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              {/* <li>
                <a
                  href="#products"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Productos
                </a>
              </li> */}
              <li>
                <a
                  href="#gallery"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-6">Productos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Granito para Cocina
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Comedores de Mármol
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Muebles de Baño
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Cerámica Importada
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Encimeras de Cuarzo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-stone-400 hover:text-amber-400 transition-colors"
                >
                  Pisos de Porcelanato
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-400 mb-4 md:mb-0">
              © {currentYear} Stone Artists . Todos los derechos reservados.
            </p>
            {/* <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                Términos y condiciones
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="text-stone-400 hover:text-amber-400 transition-colors"
              >
                Política de cookies
              </a>
            </div> */}
          </div>

          <div className="mt-8 text-center text-stone-500 text-sm">
            <p className="flex items-center justify-center">
              Hecho con <Heart className="h-4 w-4 text-red-500 mx-1" /> para
              transformar espacios
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
