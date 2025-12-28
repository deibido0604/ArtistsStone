import React from "react";
import { Check, Package, Shield, Truck, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Productos = () => {
  const products = [
    {
      id: 1,
      name: "Granito Natural",
      description:
        "Granito de alta resistencia para encimeras de cocina, baños y superficies de trabajo.",
      features: [
        "Resistente a rayones",
        "Impermeable",
        "Resistente al calor",
        "Fácil mantenimiento",
      ],
      applications: ["Encimeras de cocina", "Baños", "Mesas", "Escaleras"],
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800",
    },
    {
      id: 2,
      name: "Mármol Premium",
      description:
        "Mármol de lujo para espacios elegantes y sofisticados con acabado brillante.",
      features: [
        "Acabado brillante",
        "Vetado natural",
        "Elegante y sofisticado",
        "Valoriza espacios",
      ],
      applications: [
        "Suelos de lujo",
        "Encimeras premium",
        "Revestimientos",
        "Esculturas",
      ],
      image:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800",
    },
    {
      id: 3,
      name: "Cuarzo Compacto",
      description:
        "Material sintético de máxima resistencia y diseño uniforme, ideal para alto tráfico.",
      features: [
        "No poroso",
        "Anti-manchas",
        "Resistente a químicos",
        "Diseño uniforme",
      ],
      applications: [
        "Hospitales",
        "Restaurantes",
        "Oficinas",
        "Cocinas industriales",
      ],
      image:
        "https://images.unsplash.com/photo-1600585154340-963ed7476d06?auto=format&fit=crop&w=800",
    },
    {
      id: 4,
      name: "Travertino",
      description:
        "Piedra natural con poros característicos que le dan un aspecto rústico y único.",
      features: [
        "Aspecto rústico",
        "Textura única",
        "Durabilidad probada",
        "Clásico y atemporal",
      ],
      applications: [
        "Paredes exteriores",
        "Suelos rústicos",
        "Fuentes",
        "Jardines",
      ],
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800",
    },
    {
      id: 5,
      name: "Cerámica Premium",
      description:
        "Cerámica de alta gama en diversos formatos, colores y texturas para cualquier proyecto.",
      features: [
        "Antideslizante",
        "Resistente a manchas",
        "Variedad de formatos",
        "Fácil instalación",
      ],
      applications: ["Pisos", "Paredes", "Fachadas", "Piscinas"],
      image:
        "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=800",
    },
    {
      id: 6,
      name: "Porcelanato",
      description:
        "Material de última generación con apariencia de piedra natural y máxima resistencia.",
      features: [
        "Bajo absorción de agua",
        "Alta resistencia",
        "Apariencia natural",
        "Versátil",
      ],
      applications: [
        "Áreas húmedas",
        "Tráfico intenso",
        "Comercios",
        "Residencias",
      ],
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800",
    },
  ];

  const categories = [
    { name: "Materiales Naturales", count: 3 },
    { name: "Materiales Sintéticos", count: 2 },
    { name: "Cerámicos", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-900 to-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-amber-400">Productos</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8">
              Descubre nuestra amplia gama de materiales premium para
              transformar tus espacios. Desde granito natural hasta porcelanato
              de última generación.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-stone-900">
                  {category.name}
                </span>
                <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-800 rounded-full text-xs">
                  {category.count} productos
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-stone-900 font-semibold rounded-full text-sm">
                      {product.id <= 3 ? "Natural" : "Premium"}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-stone-600">{product.description}</p>
                    </div>
                    <Package className="h-8 w-8 text-amber-600" />
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-stone-900 mb-3 flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      Características principales
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-stone-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-stone-900 mb-2">
                      Aplicaciones:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-xs"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/#contact"
                    className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Solicitar Cotización
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              ¿Por qué elegir nuestros{" "}
              <span className="text-amber-700">productos</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Garantía de Calidad
              </h3>
              <p className="text-stone-600">
                Todos nuestros productos cuentan con garantía extendida y
                certificados de calidad.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Entrega Rápida
              </h3>
              <p className="text-stone-600">
                Entrega en todo el país con el mejor tiempo de respuesta del
                mercado.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Asesoría Personalizada
              </h3>
              <p className="text-stone-600">
                Expertos disponibles para ayudarte a elegir el mejor material
                para tu proyecto.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">
                Calidad Premium
              </h3>
              <p className="text-stone-600">
                Materiales seleccionados de los mejores proveedores nacionales e
                internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-xl mb-8">
              Contáctanos para productos personalizados o consultas especiales.
              Tenemos acceso a materiales exclusivos por pedido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* CAMBIO AQUÍ: Cambié <a> por <Link> */}
              <Link
                to="/#contact"
                className="px-8 py-4 bg-white text-amber-700 font-bold rounded-lg hover:bg-stone-100 transition-colors"
              >
                Contactar Asesor
              </Link>
              <a
                href="tel:+1234567890"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productos;