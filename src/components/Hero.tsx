import React from 'react';
import { ChevronRight, Shield, Award, Truck } from 'lucide-react';

const Hero = () => {
    // Función para desplazarse a la sección de contacto
    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Función para abrir la galería o desplazarse a ella
    const openGallery = () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-amber-900">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="container relative mx-auto px-4 py-20 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Elegancia en <span className="text-amber-400">Granito Natural</span> para tu Hogar
                    </h1>

                    <p className="text-xl text-stone-200 mb-8">
                        En <span className="font-semibold">Stone Artists </span> creamos muebles de granito, comedores y baños que combinan
                        durabilidad excepcional con diseño innovador. Transformamos espacios con
                        materiales de la más alta calidad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <button
                            onClick={scrollToContact}
                            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-all hover:scale-105 shadow-lg group"
                        >
                            Solicitar Cotización
                            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={openGallery}
                                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-4 rounded-lg font-semibold text-lg border-2 border-white/30 transition-all hover:shadow-lg"
                            >
                                Ver Proyectos
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                            <div className="bg-amber-600/20 p-3 rounded-full group-hover:bg-amber-600/30 transition-all">
                                <Shield className="h-8 w-8 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Garantía de 10 años</h3>
                                <p className="text-stone-300 text-sm">En todos nuestros productos</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                            <div className="bg-amber-600/20 p-3 rounded-full group-hover:bg-amber-600/30 transition-all">
                                <Award className="h-8 w-8 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Calidad Premium</h3>
                                <p className="text-stone-300 text-sm">Materiales certificados</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl hover:bg-white/10 transition-all cursor-pointer group">
                            <div className="bg-amber-600/20 p-3 rounded-full group-hover:bg-amber-600/30 transition-all">
                                <Truck className="h-8 w-8 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Instalación Profesional</h3>
                                <p className="text-stone-300 text-sm">Incluida en cada proyecto</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-600/20 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-stone-600/10 to-transparent rounded-full -translate-y-48 translate-x-48"></div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <button
                    onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
                    className="animate-bounce p-2"
                    aria-label="Scroll down"
                >
                    <div className="h-8 w-1 bg-amber-400 rounded-full mx-auto"></div>
                </button>
            </div>
        </section>
    );
};

export default Hero;