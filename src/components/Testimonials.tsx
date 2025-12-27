import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      role: 'Arquitecta de Interiores',
      content: 'La calidad del granito y la atención al detalle en los acabados son excepcionales. Artist\'s Stone superó todas mis expectativas en el proyecto de la casa club.',
      rating: 5
    },
    {
      id: 2,
      name: 'Carlos Rodríguez',
      role: 'Propietario de Restaurante',
      content: 'Nuestras mesas de granito han resistido perfectamente el tráfico constante del restaurante. El servicio de instalación fue impecable y profesional.',
      rating: 5
    },
    {
      id: 3,
      name: 'Ana Martínez',
      role: 'Diseñadora Residencial',
      content: 'Trabajar con Artist\'s Stone fue una experiencia excelente. Los tiempos de entrega se cumplieron y la calidad de los materiales es de primera.',
      rating: 4
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            TESTIMONIOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Lo que dicen <span className="text-amber-700">nuestros clientes</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Quote className="h-12 w-12 text-amber-200 mb-6" />
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'text-amber-500 fill-current'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>
              
              <p className="text-stone-700 text-lg mb-8 italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-stone-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-stone-300">Rating promedio</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <p className="text-stone-300">Clientes satisfechos</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
              <p className="text-stone-300">Recomendarían</p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">24h</div>
              <p className="text-stone-300">Respuesta promedio</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;