import React, { useState } from 'react';
import { Search, Grid, List, ZoomIn, Filter } from 'lucide-react';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const galleryItems = [
        { id: 1, title: 'Cocina Moderna con Isla', category: 'granito', year: 2024, image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800' },
        { id: 2, title: 'Baño de Lujo Mármol Blanco', category: 'baño', year: 2023, image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800' },
        { id: 3, title: 'Comedor Familiar Rústico', category: 'comedor', year: 2024, image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800' },
        { id: 4, title: 'Pisos Cerámicos Italianos', category: 'cerámica', year: 2023, image: 'https://images.unsplash.com/photo-1565538420870-da08ff96a207?auto=format&fit=crop&w=800' },
        { id: 5, title: 'Isla de Cocina en Granito Negro', category: 'granito', year: 2024, image: 'https://images.unsplash.com/photo-1600585154340-963ed7476d06?auto=format&fit=crop&w=800' },
        { id: 6, title: 'Vanitorio Doble con Iluminación LED', category: 'baño', year: 2023, image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800' },
        { id: 7, title: 'Mesa de Centro Travertino', category: 'comedor', year: 2024, image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800' },
        { id: 8, title: 'Pared Cerámica Decorativa', category: 'cerámica', year: 2023, image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800' },
    ];

    const categories = [
        { id: 'all', name: 'Todos', count: galleryItems.length },
        { id: 'granito', name: 'Granito', count: galleryItems.filter(i => i.category === 'granito').length },
        { id: 'baño', name: 'Baños', count: galleryItems.filter(i => i.category === 'baño').length },
        { id: 'comedor', name: 'Comedores', count: galleryItems.filter(i => i.category === 'comedor').length },
        { id: 'cerámica', name: 'Cerámica', count: galleryItems.filter(i => i.category === 'cerámica').length },
    ];

    const filteredItems = selectedCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    const searchedItems = filteredItems.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getCategoryColor = (category: string) => {
        const colors = {
            'granito': 'bg-amber-600',
            'baño': 'bg-blue-600',
            'comedor': 'bg-emerald-600',
            'cerámica': 'bg-purple-600'
        };
        return colors[category as keyof typeof colors] || 'bg-stone-600';
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
                        Explora nuestra galería de proyectos realizados con granito, mármol y cerámica de la más alta calidad.
                    </p>
                </div>

                {/* Gallery Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${selectedCategory === category.id
                                        ? 'bg-amber-600 text-white'
                                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                                    }`}
                            >
                                {category.name}
                                <span className={`px-2 py-1 text-xs rounded-full ${selectedCategory === category.id
                                        ? 'bg-amber-700'
                                        : 'bg-stone-200 text-stone-700'
                                    }`}>
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
                                className="pl-12 pr-4 py-3 rounded-full border border-stone-300 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-64"
                            />
                        </div>

                        <div className="flex bg-white rounded-full p-1 border border-stone-200">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-3 rounded-full transition-all ${viewMode === 'grid' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
                                    }`}
                                aria-label="Vista de cuadrícula"
                            >
                                <Grid className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-3 rounded-full transition-all ${viewMode === 'list' ? 'bg-amber-600 text-white' : 'text-stone-700 hover:bg-stone-100'
                                    }`}
                                aria-label="Vista de lista"
                            >
                                <List className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-stone-600">
                    <p>Mostrando {searchedItems.length} de {galleryItems.length} proyectos</p>
                </div>

                {/* Gallery Grid */}
                <div className={`mb-12 ${viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                        : 'space-y-8'
                    }`}>
                    {searchedItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${viewMode === 'list' ? 'flex' : ''
                                } animate-fade-in`}
                        >
                            <div className={`relative ${viewMode === 'list' ? 'w-1/3 min-h-[300px]' : 'h-72'
                                }`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                <button
                                    onClick={() => setSelectedImage(item.image)}
                                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    aria-label="Ampliar imagen"
                                >
                                    <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full">
                                        <ZoomIn className="h-8 w-8 text-white" />
                                    </div>
                                </button>

                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className={`px-3 py-1 text-white text-sm font-semibold rounded-full ${getCategoryColor(item.category)}`}>
                                        {item.category.toUpperCase()}
                                    </span>
                                    <span className="px-3 py-1 bg-stone-800/80 text-white text-sm font-semibold rounded-full">
                                        {item.year}
                                    </span>
                                </div>
                            </div>

                            <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''
                                }`}>
                                <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-amber-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-stone-600 mb-5">
                                    Proyecto realizado con materiales premium y diseño personalizado. Perfecto acabado y durabilidad garantizada.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <span className="text-sm text-stone-500 bg-stone-100 px-3 py-1 rounded-full">
                                            Año: {item.year}
                                        </span>
                                        <span className={`text-sm px-3 py-1 rounded-full ${getCategoryColor(item.category)} text-white`}>
                                            {item.category}
                                        </span>
                                    </div>
                                    <button className="text-amber-700 font-semibold hover:text-amber-800 flex items-center gap-2">
                                        Ver detalles
                                        <span className="group-hover:translate-x-1 transition-transform">→</span>
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
                            <h3 className="text-xl font-bold text-stone-700 mb-2">No se encontraron proyectos</h3>
                            <p className="text-stone-600 mb-6">
                                No hay proyectos que coincidan con tu búsqueda. Intenta con otros términos.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedCategory('all');
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
                        <div className="relative max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
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
            </div>
        </section>
    );
};

export default Gallery;