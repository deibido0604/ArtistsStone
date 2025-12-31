import React from "react";
import {
  Ruler,
  Truck,
  Settings,
  Shield,
  Clock,
  Users,
  Droplets,
  Hammer,
  Gem,
  Sofa,
  Zap,
  Paintbrush,
  Trees,
  ChefHat,
  Waves,
  Snowflake,
  Flower2,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Plomería Completa",
      description:
        "Instalación, reparación y mantenimiento de sistemas de plomería residencial y comercial.",
      icon: "Droplets",
      category: "plomeria",
      features: ["Tuberías", "Drenajes", "Sistemas de agua"],
    },
    {
      id: 2,
      title: "Cerámica y Tablaroca",
      description:
        "Instalación profesional de cerámica y trabajos en tablaroca para cualquier espacio.",
      icon: "Gem",
      category: "ceramica",
      features: ["Cerámica", "Porcelanato", "Tablaroca"],
    },
    {
      id: 3,
      title: "Remodelaciones de Baño",
      description:
        "Transformación completa de baños con materiales de la más alta calidad.",
      icon: "Hammer",
      category: "baño",
      features: ["Diseño", "Materiales premium", "Instalación"],
    },
    {
      id: 4,
      title: "Granito, Cuarzo y Mármol",
      description:
        "Encimeras y superficies en piedra natural y sintética para cocinas y baños.",
      icon: "Gem",
      category: "granito",
      features: ["Granito", "Cuarzo", "Mármol"],
    },
    {
      id: 5,
      title: "Muebles a Medida",
      description:
        "Diseño y fabricación de muebles de cocina, baño y closets organizadores.",
      icon: "Sofa",
      category: "muebles",
      features: ["Cocinas", "Vanidades", "Closets"],
    },
    {
      id: 6,
      title: "Instalaciones Eléctricas",
      description:
        "Sistemas eléctricos seguros y certificados para hogares y comercios.",
      icon: "Zap",
      category: "electricidad",
      features: ["Residencial", "Comercial", "Paneles solares"],
    },
    {
      id: 7,
      title: "Pintura Interior/Exterior",
      description:
        "Servicios de pintura profesional con acabados perfectos y duraderos.",
      icon: "Paintbrush",
      category: "pintura",
      features: ["Residencial", "Comercial", "Impermeabilización"],
    },
    {
      id: 8,
      title: "Pérgolas y Estructuras",
      description:
        "Diseño y construcción de estructuras para exteriores y áreas de entretenimiento.",
      icon: "Trees",
      category: "pergolas",
      features: ["Madera", "Metálicas", "Policarbonato"],
    },
    {
      id: 9,
      title: "Cocinas Exteriores",
      description:
        "Creación de áreas de entretenimiento con cocinas exteriores y parrillas.",
      icon: "ChefHat",
      category: "cocinas",
      features: ["Parrillas", "Barras", "Iluminación"],
    },
    {
      id: 10,
      title: "Piscinas",
      description:
        "Construcción y mantenimiento de piscinas residenciales con sistemas modernos.",
      icon: "Waves",
      category: "piscinas",
      features: ["Construcción", "Mantenimiento", "Sistemas"],
    },
    {
      id: 11,
      title: "Refrigeración",
      description:
        "Sistemas de aire acondicionado y refrigeración para cualquier necesidad.",
      icon: "Snowflake",
      category: "refrigeracion",
      features: ["Aire acondicionado", "Refrigeración", "Mantenimiento"],
    },
    {
      id: 12,
      title: "Jardinería",
      description:
        "Diseño y mantenimiento de jardines y áreas verdes con sistemas de riego.",
      icon: "Flower2",
      category: "jardineria",
      features: ["Paisajismo", "Riego", "Mantenimiento"],
    },
  ];

  const iconMap = {
    Ruler,
    Truck,
    Settings,
    Shield,
    Clock,
    Users,
    Droplets,
    Hammer,
    Gem,
    Sofa,
    Zap,
    Paintbrush,
    Trees,
    ChefHat,
    Waves,
    Snowflake,
    Flower2,
  };

  // Misma función de color que en Gallery
  const getCategoryColor = (category: string) => {
    const colors: Record<string, { bg: string; gradient: string; text: string }> = {
      granito: {
        bg: "bg-amber-600",
        gradient: "from-amber-500 to-amber-700",
        text: "text-amber-700",
      },
      baño: {
        bg: "bg-blue-600",
        gradient: "from-blue-500 to-blue-700",
        text: "text-blue-700",
      },
      ceramica: {
        bg: "bg-amber-600",
        gradient: "from-amber-500 to-amber-700",
        text: "text-amber-700",
      },
      plomeria: {
        bg: "bg-blue-600",
        gradient: "from-blue-500 to-blue-700",
        text: "text-blue-700",
      },
      muebles: {
        bg: "bg-purple-600",
        gradient: "from-purple-500 to-purple-700",
        text: "text-purple-700",
      },
      electricidad: {
        bg: "bg-yellow-600",
        gradient: "from-yellow-500 to-yellow-700",
        text: "text-yellow-700",
      },
      pintura: {
        bg: "bg-red-600",
        gradient: "from-red-500 to-red-700",
        text: "text-red-700",
      },
      pergolas: {
        bg: "bg-green-600",
        gradient: "from-green-500 to-green-700",
        text: "text-green-700",
      },
      cocinas: {
        bg: "bg-orange-600",
        gradient: "from-orange-500 to-orange-700",
        text: "text-orange-700",
      },
      piscinas: {
        bg: "bg-cyan-600",
        gradient: "from-cyan-500 to-cyan-700",
        text: "text-cyan-700",
      },
      refrigeracion: {
        bg: "bg-sky-600",
        gradient: "from-sky-500 to-sky-700",
        text: "text-sky-700",
      },
      jardineria: {
        bg: "bg-lime-600",
        gradient: "from-lime-500 to-lime-700",
        text: "text-lime-700",
      },
    };

    return colors[category] || {
      bg: "bg-stone-600",
      gradient: "from-stone-500 to-stone-700",
      text: "text-stone-700",
    };
  };

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-b from-stone-50 to-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Servicios <span className="text-amber-700">Especializados</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ofrecemos soluciones integrales para transformar tus espacios con la
            más alta calidad y profesionalismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            const color = getCategoryColor(service.category);
            return (
              <div
                key={service.id}
                className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-stone-100"
              >
                <div className="mb-4">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${color.gradient} rounded-xl text-white mb-4 group-hover:${color.bg} transition-all duration-300`}>
                    <IconComponent className="h-7 w-7" />
                  </div>
                </div>

                <h3 className={`text-xl font-bold text-stone-900 mb-3 group-hover:${color.text} transition-colors`}>
                  {service.title}
                </h3>

                <p className="text-stone-600 text-sm mb-4">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 ${color.bg.replace('600', '50')} ${color.text.replace('700', '600')} text-xs font-medium rounded-full`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center ${color.text} font-semibold text-sm hover:${color.text.replace('700', '800')} group/link`}
                >
                  Solicitar servicio
                  <span className="ml-2 group-hover/link:ml-4 transition-all">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-stone-200">
          <h3 className="text-3xl font-bold text-center text-stone-900 mb-12">
            Nuestro <span className="text-amber-700">Proceso</span> de Trabajo
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consulta Inicial",
                desc: "Evaluamos tus necesidades y espacio disponible para ofrecerte la mejor solución.",
                color: "from-blue-500 to-blue-700",
              },
              {
                step: "02",
                title: "Diseño y Cotización",
                desc: "Creamos propuestas personalizadas con diseños y presupuestos detallados.",
                color: "from-amber-500 to-amber-700",
              },
              {
                step: "03",
                title: "Ejecución",
                desc: "Producimos e instalamos con materiales premium y mano de obra especializada.",
                color: "from-emerald-500 to-emerald-700",
              },
              {
                step: "04",
                title: "Entrega Final",
                desc: "Realizamos entregas puntuales con garantía y servicio post-venta incluido.",
                color: "from-green-500 to-green-700",
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-full text-white text-2xl font-bold mb-4`}>
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>

                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-amber-600/20 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 pt-16 border-t border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-stone-900 mb-4">
                ¿Por qué elegir{" "}
                <span className="text-amber-700">Artist's Stone</span>?
              </h3>
              <p className="text-stone-600 max-w-2xl mx-auto">
                Más de 10 años de experiencia transformando espacios con
                calidad, dedicación y profesionalismo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">
                  Garantía de Calidad
                </h4>
                <p className="text-stone-600">
                  Todos nuestros trabajos cuentan con garantía extendida y
                  certificados de calidad.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">
                  Entregas Puntuales
                </h4>
                <p className="text-stone-600">
                  Cumplimos con los plazos establecidos sin comprometer la
                  calidad del trabajo.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-stone-900 mb-3">
                  Equipo Especializado
                </h4>
                <p className="text-stone-600">
                  Contamos con especialistas certificados en cada área de
                  construcción y diseño.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;