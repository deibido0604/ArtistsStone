import React from 'react';
import { Ruler, Truck, Settings, Shield, Clock, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Diseño Personalizado',
      description: 'Creamos diseños a medida según tus necesidades y espacio disponible.',
      icon: 'Ruler'
    },
    {
      id: 2,
      title: 'Fabricación Propia',
      description: 'Contamos con taller propio para garantizar calidad y tiempos de entrega.',
      icon: 'Settings'
    },
    {
      id: 3,
      title: 'Instalación Profesional',
      description: 'Equipo especializado en instalación de muebles de granito y cerámica.',
      icon: 'Truck'
    },
    {
      id: 4,
      title: 'Mantenimiento',
      description: 'Servicio de mantenimiento y restauración para prolongar la vida útil.',
      icon: 'Shield'
    },
    {
      id: 5,
      title: 'Entrega Express',
      description: 'Servicio de entrega rápida para proyectos urgentes.',
      icon: 'Clock'
    },
    {
      id: 6,
      title: 'Asesoría Técnica',
      description: 'Expertos en materiales para recomendarte la mejor opción.',
      icon: 'Users'
    },
  ];

  const iconMap = {
    Ruler, Truck, Settings, Shield, Clock, Users
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            NUESTROS SERVICIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Soluciones <span className="text-amber-700">Completas</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Ofrecemos un servicio integral desde el diseño hasta la instalación, 
            asegurando excelencia en cada etapa del proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <div
                key={service.id}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-2xl group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-amber-600 group-hover:text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-amber-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-stone-600 mb-6">
                  {service.description}
                </p>
                
                <a
                  href="#contact"
                  className="inline-flex items-center text-amber-700 font-semibold group-hover:text-amber-800"
                >
                  Saber más
                  <span className="ml-2 group-hover:ml-4 transition-all">→</span>
                </a>
              </div>
            );
          })}
        </div>

        {/* Process Steps */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <h3 className="text-3xl font-bold text-center text-stone-900 mb-12">
            Nuestro <span className="text-amber-700">Proceso</span> de Trabajo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consulta', desc: 'Evaluamos tus necesidades' },
              { step: '02', title: 'Diseño', desc: 'Creamos propuestas personalizadas' },
              { step: '03', title: 'Fabricación', desc: 'Producimos con materiales premium' },
              { step: '04', title: 'Instalación', desc: 'Instalamos con precisión' },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-amber-600/30 to-transparent -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;