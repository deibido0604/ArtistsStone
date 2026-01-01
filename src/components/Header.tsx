import React, { useState } from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: "Inicio", href: "/" },
    // { label: "Productos", href: "/productos" },
    { label: "Proyectos", href: "/#gallery" },
    { label: "Servicios", href: "/#services" },
    { label: "Contacto", href: "/#contact" },
  ];

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo con imagen */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 flex items-center justify-center rounded-full overflow-hidden">
              <img
                src="/Stone Logo 3.png"
                alt="Artist's Stone Logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-stone-800">
                Stone Artists
              </h1>
              <p className="text-xs text-stone-500">Artistas de la piedra</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              // Si es el enlace de contacto en la home
              if (item.href.startsWith("/#")) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`${location.pathname === "/" ? "text-amber-700" : "text-stone-700"} hover:text-amber-700 font-medium transition-colors duration-300`}
                  >
                    {item.label}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`${location.pathname === item.href ? "text-amber-700" : "text-stone-700"} hover:text-amber-700 font-medium transition-colors duration-300`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-amber-700" />
              <span className="text-stone-700 font-medium">+504 3225-8461</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-amber-700" />
              <span className="text-stone-700">San Pedro Sula, Honduras</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-stone-800" />
            ) : (
              <Menu className="h-6 w-6 text-stone-800" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                if (item.href.startsWith("/#")) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-stone-700 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-stone-50 transition-colors"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-stone-700 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-stone-50 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-700">+504 3225-8461</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-amber-700" />
                  <span className="text-stone-700">
                    San Pedro Sula, Honduras
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
