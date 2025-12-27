import React from 'react';
import { Check, Star, TrendingUp } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Cocina de Granito Negro Absoluto',
      category: 'granito',
      description: 'Encimeras de granito negro con vetas blancas, resistente a altas temperaturas y rayones.',
      features: ['Resistente al calor', 'Impermeable', 'Fácil limpieza', 'Espesor 3cm'],
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800'
    },
    {
      id: 2,
      name: 'Comedor Mármol Travertino',
      category: 'comedor',
      description: 'Mesa de comedor con base metálica y superficie de mármol travertino para 8 personas.',
      features: ['Base de acero inoxidable', 'Terminación pulida', 'Piedra natural', 'Incluye sillas'],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      name: 'Vanitorio de Baño Onyx',
      category: 'baño',
      description: 'Vanitorio doble con lavamanos integrado y espejo iluminado, ideal para baños master.',
      features: ['Iluminación LED', 'Doble lavamanos', 'Cajones soft-close', 'Resistente a humedad'],
      image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800'
    },
    {
      id: 4,
      name: 'Piso Cerámico Italiano',
      category: 'cerámica',
      description: 'Cerámica de alta gama importada de Italia, disponible en múltiples diseños y acabados.',
      features: ['Antideslizante', 'Bajo mantenimiento', 'Variedad de colores', 'Garantía 25 años'],
      image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=800'
    },
  ];

  const categories = [
    { id: 'all', name: 'Todos', count: 15 },
    { id: 'granito', name: 'Granito', count: 6 },
    { id: 'comedor', name: 'Comedores', count: 4 },
    { id: 'baño', name: 'Baños', count: 3 },
    { id: 'cerámica', name: 'Cerámica', count: 2 },
  ];

  const [activeCategory, setActiveCategory] = React.useState('all');

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            NUESTROS PRODUCTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Excelencia en Cada <span className="text-amber-700">Detalle</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Descubre nuestra colección exclusiva de muebles y acabados en granito, 
            diseñados para transformar tus espacios con elegancia y durabilidad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-80">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                    {product.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-amber-500 fill-current" />
                    <span className="ml-1 text-sm font-semibold">4.8</span>
                  </div>
                </div>
                
                <p className="text-stone-600 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  <button className="px-6 py-3 bg-stone-900 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors">
                    Ver Detalles
                  </button>
                  <div className="flex items-center text-amber-700">
                    <TrendingUp className="h-5 w-5 mr-1" />
                    <span className="font-bold">+32%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-stone-900 to-stone-800 rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">500+</div>
              <p className="text-stone-300">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">98%</div>
              <p className="text-stone-300">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">25</div>
              <p className="text-stone-300">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">15</div>
              <p className="text-stone-300">Países de Origen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;