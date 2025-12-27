import React, { useState } from "react";
import {
  Search,
  Grid,
  List,
  ZoomIn,
  Filter,
  X,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryItems = [
    {
      id: 1,
      title: "Cocina Moderna con Isla",
      category: "granito",
      year: 2024,
      mainImage:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600585154340-963ed7476d06?auto=format&fit=crop&w=1200",
      ],
      description:
        "Cocina moderna con isla central en granito negro absoluto. Diseño minimalista con iluminación LED integrada y electrodomésticos de última generación.",
      features: [
        "Isla central con almacenamiento",
        "Iluminación LED bajo gabinete",
        "Sistema de extracción silencioso",
        "Encimera de 3cm de grosor",
      ],
      materials: [
        "Granito Negro Absoluto",
        "Acero Inoxidable",
        "Madera de Roble",
      ],
    },
    {
      id: 2,
      title: "Baño de Lujo Mármol Blanco",
      category: "baño",
      year: 2023,
      mainImage:
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
      ],
      description:
        "Baño principal de lujo con mármol blanco carrara, mobiliario suspendido y sistema de hidromasaje. Acabados en bronce y espejo inteligente.",
      features: [
        "Ducha de hidromasaje",
        "Calefacción radiante",
        "Espejo inteligente con LED",
        "Mobiliario suspendido",
      ],
      materials: [
        "Mármol Carrara",
        "Porcelanato Italiano",
        "Bronce Satín",
        "Cristal Templado",
      ],
    },
    {
      id: 3,
      title: "Comedor Familiar Rústico",
      category: "comedor",
      year: 2024,
      mainImage:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200",
      ],
      description:
        "Comedor familiar con mesa de granito travertino y sillas tapizadas. Diseño rústico moderno con iluminación focalizada y espacio para 8 personas.",
      features: [
        "Mesa extensible",
        "Sillas ergonómicas",
        "Iluminación regulable",
        "Estantería integrada",
      ],
      materials: [
        "Granito Travertino",
        "Madera de Teca",
        "Tela de Lino",
        "Hierro Forjado",
      ],
    },
    {
      id: 4,
      title: "Pisos Cerámicos Italianos",
      category: "cerámica",
      year: 2023,
      mainImage:
        "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=1200",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200",
      ],
      description:
        "Instalación completa de pisos cerámicos italianos de alta gama en acabado mate. Patrón de colocación personalizado y juntas mínimas.",
      features: [
        "Resistente a rayaduras",
        "Antideslizante",
        "Fácil mantenimiento",
        "Garantía de 10 años",
      ],
      materials: [
        "Cerámica Italiana 60x60",
        "Pegamento Premium",
        "Juntas de Epoxi",
      ],
    },
    {
      id: 5,
      title: "Isla de Cocina en Granito Negro",
      category: "granito",
      year: 2024,
      mainImage:
        "https://images.unsplash.com/photo-1600585154340-963ed7476d06?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1600585154340-963ed7476d06?auto=format&fit=crop&w=1200",
      ],
      description:
        "Isla de cocina independiente en granito negro con barra desayunadora. Integración de almacenamiento inteligente y taburetes personalizados.",
      features: [
        "Barras para colgar utensilios",
        "Cajones con sistema soft-close",
        "Tomacorrientes USB",
        "Superficie resistente al calor",
      ],
      materials: ["Granito Negro Galaxy", "Acero Pulido", "Madera de Nogal"],
    },
    {
      id: 6,
      title: "Vanitorio Doble con Iluminación LED",
      category: "baño",
      year: 2023,
      mainImage:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200",
      ],
      description:
        "Vanitorio doble con encimera de cuarzo y iluminación LED integrada. Espejos amplios y almacenamiento optimizado para baño compartido.",
      features: [
        "Iluminación LED regulable",
        "Espejos con antiempañante",
        "Grifería táctil",
        "Cajones impermeables",
      ],
      materials: ["Cuarzo Blanco", "Cristal Templado", "Aluminio Anodizado"],
    },
    {
      id: 7,
      title: "Mesa de Centro Travertino",
      category: "comedor",
      year: 2024,
      mainImage:
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=1200",
      ],
      description:
        "Mesa de centro en travertino natural con base metálica. Diseño minimalista que complementa espacios modernos y contemporáneos.",
      features: [
        "Bordes pulidos",
        "Base estabilizadora",
        "Superficie sellada",
        "Fácil de limpiar",
      ],
      materials: [
        "Travertino Natural",
        "Acero Negro Mate",
        "Cristal de Seguridad",
      ],
    },
    {
      id: 8,
      title: "Pared Cerámica Decorativa",
      category: "cerámica",
      year: 2023,
      mainImage:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200",
      images: [
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1200",
      ],
      description:
        "Pared decorativa con cerámica texturizada en patrón geométrico. Acabado brillante que refleja la luz natural del espacio.",
      features: [
        "Efecto 3D",
        "Resistente a la humedad",
        "Fácil limpieza",
        "Instalación sin juntas visibles",
      ],
      materials: [
        "Cerámica Texturizada",
        "Adhesivo de Alto Rendimiento",
        "Lechada Color Personalizado",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "Todos", count: galleryItems.length },
    {
      id: "granito",
      name: "Granito",
      count: galleryItems.filter((i) => i.category === "granito").length,
    },
    {
      id: "baño",
      name: "Baños",
      count: galleryItems.filter((i) => i.category === "baño").length,
    },
    {
      id: "comedor",
      name: "Comedores",
      count: galleryItems.filter((i) => i.category === "comedor").length,
    },
    {
      id: "cerámica",
      name: "Cerámica",
      count: galleryItems.filter((i) => i.category === "cerámica").length,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const searchedItems = filteredItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    const colors = {
      granito: "bg-amber-600",
      baño: "bg-blue-600",
      comedor: "bg-emerald-600",
      cerámica: "bg-purple-600",
    };
    return colors[category as keyof typeof colors] || "bg-stone-600";
  };

  const handleNextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleOpenProjectDetails = (project: any) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const handleCloseProjectDetails = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            <Filter className="h-4 w-4" />
            GALERÍA DE PROYECTOS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Nuestros <span className="text-amber-700">Trabajos</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explora nuestra galería de proyectos realizados con granito, mármol
            y cerámica de la más alta calidad.
          </p>
        </div>

        {/* Gallery Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full font-medium transition-all flex items-center gap-2 text-sm md:text-base ${
                  selectedCategory === category.id
                    ? "bg-amber-600 text-white"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                }`}
              >
                {category.name}
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    selectedCategory === category.id
                      ? "bg-amber-700"
                      : "bg-stone-200 text-stone-700"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar proyectos..."
                className="pl-12 pr-4 py-3 rounded-full border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-48 md:w-64"
              />
            </div>

            <div className="flex bg-white rounded-full p-1 border border-stone-200">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 md:p-3 rounded-full transition-all ${
                  viewMode === "grid"
                    ? "bg-amber-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
                aria-label="Vista de cuadrícula"
              >
                <Grid className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 md:p-3 rounded-full transition-all ${
                  viewMode === "list"
                    ? "bg-amber-600 text-white"
                    : "text-stone-700 hover:bg-stone-100"
                }`}
                aria-label="Vista de lista"
              >
                <List className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-stone-600 text-sm md:text-base">
          <p>
            Mostrando {searchedItems.length} de {galleryItems.length} proyectos
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className={`mb-12 ${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              : "space-y-6 md:space-y-8"
          }`}
        >
          {searchedItems.map((item) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              } animate-fade-in`}
            >
              <div
                className={`relative ${
                  viewMode === "list"
                    ? "md:w-1/3 min-h-[250px] md:min-h-[300px]"
                    : "h-64 md:h-72"
                }`}
              >
                <img
                  src={item.mainImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button
                  onClick={() => handleOpenProjectDetails(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  aria-label="Ver detalles del proyecto"
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 md:p-4 rounded-full">
                    <ZoomIn className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </button>

                <div className="absolute top-4 left-4 flex flex-col md:flex-row gap-2">
                  <span
                    className={`px-2 py-1 md:px-3 md:py-1 text-white text-xs md:text-sm font-semibold rounded-full ${getCategoryColor(item.category)}`}
                  >
                    {item.category.toUpperCase()}
                  </span>
                  <span className="px-2 py-1 md:px-3 md:py-1 bg-stone-800/80 text-white text-xs md:text-sm font-semibold rounded-full">
                    {item.year}
                  </span>
                </div>
              </div>

              <div
                className={`p-4 md:p-6 ${
                  viewMode === "list" ? "md:w-2/3" : ""
                }`}
              >
                <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-2 md:mb-3 group-hover:text-amber-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-stone-600 mb-3 md:mb-5 line-clamp-3 text-sm md:text-base">
                  {item.description}
                </p>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
                  <div className="flex items-center gap-2 md:gap-3">
                    <span className="text-xs md:text-sm text-stone-500 bg-stone-100 px-2 py-1 md:px-3 md:py-1 rounded-full">
                      Año: {item.year}
                    </span>
                    <span
                      className={`text-xs md:text-sm px-2 py-1 md:px-3 md:py-1 rounded-full ${getCategoryColor(item.category)} text-white`}
                    >
                      {item.category}
                    </span>
                  </div>
                  <button
                    onClick={() => handleOpenProjectDetails(item)}
                    className="text-amber-700 font-semibold hover:text-amber-800 flex items-center gap-2 text-sm md:text-base"
                  >
                    Ver detalles
                    <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {searchedItems.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="h-16 w-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-stone-400" />
              </div>
              <h3 className="text-xl font-bold text-stone-700 mb-2">
                No se encontraron proyectos
              </h3>
              <p className="text-stone-600 mb-6">
                No hay proyectos que coincidan con tu búsqueda. Intenta con
                otros términos.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
              >
                Ver todos los proyectos
              </button>
            </div>
          </div>
        )}

        {/* Modal para imagen ampliada */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Ampliada"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/80 p-2 rounded-full transition-colors"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Modal de Detalles del Proyecto - Corregido para responsive */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 animate-fade-in">
            <div className="min-h-full flex items-start md:items-center justify-center p-2 md:p-4">
              <div className="bg-white rounded-2xl w-full max-w-6xl max-h-[90vh] md:max-h-[95vh] overflow-hidden mx-auto my-4 md:my-0">
                {/* Header del Modal */}
                <div className="sticky top-0 bg-white border-b border-stone-200 p-4 md:p-6 flex justify-between items-center z-10">
                  <div className="pr-4">
                    <h2 className="text-lg md:text-2xl font-bold text-stone-900">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-2">
                      <span
                        className={`px-2 py-1 md:px-3 md:py-1 text-white text-xs md:text-sm font-semibold rounded-full ${getCategoryColor(selectedProject.category)}`}
                      >
                        {selectedProject.category.toUpperCase()}
                      </span>
                      <span className="px-2 py-1 md:px-3 md:py-1 bg-stone-100 text-stone-700 text-xs md:text-sm font-semibold rounded-full">
                        {selectedProject.year}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleCloseProjectDetails}
                    className="p-2 hover:bg-stone-100 rounded-full transition-colors flex-shrink-0"
                    aria-label="Cerrar"
                  >
                    <X className="h-5 w-5 md:h-6 md:w-6 text-stone-500" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)] md:max-h-[calc(95vh-80px)]">
                  {/* Carrusel de Imágenes */}
                  <div className="relative h-48 md:h-96 bg-stone-900">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Navegación del carrusel */}
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevImage}
                          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all"
                          aria-label="Imagen anterior"
                        >
                          <ArrowLeft className="h-4 w-4 md:h-5 md:w-5" />
                        </button>
                        <button
                          onClick={handleNextImage}
                          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 md:p-3 rounded-full text-white transition-all"
                          aria-label="Siguiente imagen"
                        >
                          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
                        </button>

                        {/* Indicadores */}
                        <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1 md:gap-2">
                          {selectedProject.images.map(
                            (_: any, index: number) => (
                              <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${currentImageIndex === index ? "bg-white" : "bg-white/50"}`}
                                aria-label={`Ir a imagen ${index + 1}`}
                              />
                            )
                          )}
                        </div>
                      </>
                    )}
                  </div>

                  {/* Contenido Principal */}
                  <div className="p-4 md:p-8">
                    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8">
                      {/* Columna Principal */}
                      <div className="lg:col-span-2 space-y-6">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-stone-900 mb-3 md:mb-4">
                            Descripción del Proyecto
                          </h3>
                          <p className="text-stone-700 leading-relaxed text-sm md:text-base">
                            {selectedProject.description}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-base md:text-lg font-bold text-stone-900 mb-3 md:mb-4">
                              Características Principales
                            </h4>
                            <ul className="space-y-2">
                              {selectedProject.features.map(
                                (feature: string, index: number) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-2"
                                  >
                                    <span className="text-amber-600 font-bold mt-0.5">
                                      ✓
                                    </span>
                                    <span className="text-stone-700 text-sm md:text-base">
                                      {feature}
                                    </span>
                                  </li>
                                )
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-base md:text-lg font-bold text-stone-900 mb-3 md:mb-4">
                              Materiales Utilizados
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.materials.map(
                                (material: string, index: number) => (
                                  <span
                                    key={index}
                                    className="px-2 py-1 md:px-3 md:py-2 bg-stone-100 text-stone-700 rounded-lg text-xs md:text-sm"
                                  >
                                    {material}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Columna Lateral - Cotización */}
                      <div className="lg:col-span-1">
                        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 md:p-6 h-full">
                          <h4 className="text-base md:text-lg font-bold text-stone-900 mb-3 md:mb-4">
                            ¿Te gustó este proyecto?
                          </h4>
                          <p className="text-stone-700 mb-4 md:mb-6 text-sm md:text-base">
                            Podemos crear algo similar para ti. Contáctanos para
                            una cotización personalizada.
                          </p>
                          <a
                            href="#contact"
                            onClick={handleCloseProjectDetails}
                            className="inline-block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-colors text-sm md:text-base"
                          >
                            Solicitar Cotización
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;