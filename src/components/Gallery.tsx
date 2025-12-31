import React, { useState } from "react";
import {
  Search,
  Grid,
  List,
  ZoomIn,
  Filter,
  X,
  ExternalLink,
} from "lucide-react";

interface ProjectItem {
  id: number;
  title: string;
  category: string;
  year: number;
  mainImage: string;
  description: string;
  features: string[];
  materials: string[];
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  const projectItems: ProjectItem[] = [
    {
      id: 1,
      title: "Cocina Moderna con Isla de Granito",
      category: "granito",
      year: 2024,
      mainImage: "/gallery/Cocina_Isla_Granito.png",
      description: "Cocina moderna con isla central en granito cafe absoluto.",
      features: [
        "Isla central con almacenamiento",
        "Sistema de extracción silencioso",
        "Encimera de 3cm de grosor",
      ],
      materials: [
        "Granito Café Absoluto",
        "Acero Inoxidable",
        "Madera de Roble",
      ],
    },
    {
      id: 2,
      title: "Cocina con Barra y Encimera de Granito",
      category: "granito",
      year: 2024,
      mainImage: "/gallery/Encimera_Cocina_Granito.png",
      description:
        "Cocina con barra funcional y encimera de granito natural, ideal para espacios compactos y modernos.",
      features: [
        "Barra tipo península",
        "Lavaplatos integrado",
        "Acabado rústico en base de ladrillo",
        "Encimera pulida de alta resistencia",
      ],
      materials: ["Granito natural", "Acero inoxidable", "Ladrillo decorativo"],
    },
    {
      id: 3,
      title: "Ducha Moderna con Revestimiento Tipo Mármol",
      category: "baño",
      year: 2024,
      mainImage: "/gallery/Ducha_Lujo_Ceramica.png",
      description:
        "Ducha tipo walk-in con revestimiento tipo mármol en tonos claros, iluminación empotrada y sistema de ducha doble para una experiencia moderna y elegante.",
      features: [
        "Ducha tipo walk-in",
        "Ducha tipo lluvia en techo",
        "Ducha secundaria lateral",
        "Nichos empotrados para productos",
      ],
      materials: [
        "Revestimiento tipo mármol",
        "Mosaico decorativo",
        "Acero inoxidable",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "Todos", count: projectItems.length },
    {
      id: "granito",
      name: "Granito",
      count: projectItems.filter((i) => i.category === "granito").length,
    },
    {
      id: "baño",
      name: "Baños",
      count: projectItems.filter((i) => i.category === "baño").length,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? projectItems
      : projectItems.filter((item) => item.category === selectedCategory);

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
      ceramica: "bg-amber-600",
      plomeria: "bg-blue-600",
      muebles: "bg-purple-600",
      electricidad: "bg-yellow-600",
      pintura: "bg-red-600",
      pergolas: "bg-green-600",
      cocinas: "bg-orange-600",
      piscinas: "bg-cyan-600",
      refrigeracion: "bg-sky-600",
      jardineria: "bg-lime-600",
    };
    return colors[category as keyof typeof colors] || "bg-stone-600";
  };

  const handleOpenDetails = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    handleCloseDetails();

    if (window.location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
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
            Nuestros{" "}
            <span className="text-amber-700">Proyectos Realizados</span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Descubre nuestra cartera de proyectos donde la calidad y el diseño
            se encuentran para crear espacios únicos.
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
            Mostrando {searchedItems.length} de {projectItems.length} proyectos
          </p>
        </div>

        {/* Grid de Proyectos */}
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
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list"
                    ? "md:w-1/3 min-h-[250px] md:min-h-[300px]"
                    : "h-64 md:h-72"
                }`}
              >
                <div className="w-full h-full">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    loading="lazy"
                    style={{ transformOrigin: "center center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <button
                  onClick={() => handleOpenDetails(item)}
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                    onClick={() => handleOpenDetails(item)}
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

        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90">
            <div className="min-h-full flex items-start md:items-center justify-center p-2 md:p-4">
              <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] md:max-h-[95vh] overflow-hidden mx-auto my-4 md:my-0">
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
                    onClick={handleCloseDetails}
                    className="p-2 hover:bg-stone-100 rounded-full transition-colors flex-shrink-0"
                    aria-label="Cerrar"
                  >
                    <X className="h-5 w-5 md:h-6 md:w-6 text-stone-500" />
                  </button>
                </div>

                <div className="overflow-y-auto max-h-[calc(90vh-80px)] md:max-h-[calc(95vh-80px)]">
                  <div className="relative bg-stone-900 flex items-center justify-center min-h-[200px] md:min-h-[250px]">
                    <div className="w-full h-full flex items-center justify-center p-4">
                      <img
                        src={selectedProject.mainImage}
                        alt={selectedProject.title}
                        className="max-w-full max-h-64 object-cover rounded-2xl"
                      />
                    </div>
                  </div>

                  <div className="p-4 md:p-8">
                    <div className="space-y-6">
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

                      <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 mt-8">
                        <h4 className="text-base md:text-lg font-bold text-stone-900 mb-4">
                          ¿Interesado en un proyecto similar?
                        </h4>
                        <p className="text-stone-700 mb-6 text-sm md:text-base">
                          Contáctanos para una cotización personalizada sin
                          compromiso.
                        </p>
                        <a
                          href="#contact"
                          onClick={handleContactClick}
                          className="inline-block w-full text-center bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
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
        )}
      </div>
    </section>
  );
};

export default Gallery;
