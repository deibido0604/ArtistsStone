import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("https://formspree.io/f/xqekewev", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          _subject: `Nueva consulta de ${formData.name} - ${formData.service || "Sin servicio especificado"}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      setError(
        "Hubo un error al enviar el mensaje. Por favor, intenta nuevamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold mb-4">
            CONTACTO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
            Transformemos <span className="text-amber-700">tu espacio</span>{" "}
            juntos
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Solicita una cotización gratuita y recibe asesoría personalizada de
            nuestros expertos. <span className="text-amber-700 font-semibold">¡Trabajamos en todo Honduras!</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-stone-50 to-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-stone-900 mb-8">
              Solicita tu <span className="text-amber-700">cotización</span>
            </h3>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-stone-900 mb-4">
                  ¡Mensaje Enviado!
                </h4>
                <p className="text-stone-600 mb-8">
                  Nos pondremos en contacto contigo en las próximas 24 horas.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-stone-900 placeholder:text-stone-500"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-stone-700 font-medium mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-stone-900 placeholder:text-stone-500"
                      placeholder="+504 88447-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-stone-900 placeholder:text-stone-500"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-stone-900"
                  >
                    <option value="" className="text-stone-500">
                      Selecciona un servicio
                    </option>
                    <option value="plomeria" className="text-stone-900">
                      Plomería Completa
                    </option>
                    <option value="ceramica" className="text-stone-900">
                      Cerámica y Pisos de PVC
                    </option>
                    <option value="baño" className="text-stone-900">
                      Remodelaciones de Baño
                    </option>
                    <option value="granito" className="text-stone-900">
                      Granito, Cuarzo y Mármol
                    </option>
                    <option value="muebles" className="text-stone-900">
                      Muebles a Medida
                    </option>
                    <option value="electricidad" className="text-stone-900">
                      Instalaciones Eléctricas
                    </option>
                    <option value="pintura" className="text-stone-900">
                      Pintura Interior/Exterior
                    </option>
                    <option value="pergolas" className="text-stone-900">
                      Pérgolas y Estructuras
                    </option>
                    <option value="cocinas" className="text-stone-900">
                      Cocinas Exteriores
                    </option>
                    <option value="piscinas" className="text-stone-900">
                      Piscinas
                    </option>
                    <option value="refrigeracion" className="text-stone-900">
                      Refrigeración
                    </option>
                    <option value="jardineria" className="text-stone-900">
                      Jardinería
                    </option>
                    <option value="otro" className="text-stone-900">
                      Otro
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-700 font-medium mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent bg-white text-stone-900 placeholder:text-stone-500"
                    placeholder="Describe tu proyecto o consulta..."
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-4">
                  <p className="text-sm text-stone-500">
                    * Campos obligatorios
                  </p>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-800 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 rounded-2xl p-8 text-white">
              <div className="mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-amber-600/30 rounded-full mb-4">
                  <span className="text-amber-300 font-semibold text-sm">
                    🚚 COBERTURA NACIONAL
                  </span>
                </div>
                <h3 className="text-2xl font-bold">
                  Servicios en <span className="text-amber-400">todo Honduras</span>
                </h3>
                <p className="text-stone-300 mt-2">
                  Atendemos proyectos en todas las regiones del país
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                    <p className="text-stone-300">+504 3225-8461</p>
                    <p className="text-stone-400 text-sm mt-1">
                      Línea nacional - Llámanos desde cualquier ciudad
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Correo electrónico
                    </h4>
                    <p className="text-stone-300">stoneartists@hotmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Área de Servicio</h4>
                    <p className="text-stone-300">
                      <span className="text-amber-300 font-semibold">¡Trabajamos en todo Honduras!</span>
                      <br />
                      Oficina central en San Pedro Sula
                      <br />
                      <span className="text-stone-400 text-sm">
                        Atendemos: Tegucigalpa, La Ceiba, Comayagua, Choluteca, etc.
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-600/20 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Horario de atención
                    </h4>
                    <p className="text-stone-300">
                      Lunes a Viernes: 8:00 AM - 6:00 PM
                      <br />
                      Sábados: 9:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa de Honduras */}
            <div className="bg-gradient-to-br from-stone-100 to-stone-50 rounded-2xl overflow-hidden h-64 relative">
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                <div className="bg-amber-600/90 text-white px-6 py-3 rounded-full">
                  <span className="font-bold">🇭🇳 Trabajamos en todo Honduras</span>
                </div>
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984888.8368311972!2d-87.95322614999999!3d15.199999999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6a5d6d9b8b8b8b%3A0x8f6a5d6d9b8b8b8b!2sHonduras!5e0!3m2!1ses!2shn!4v1690838400000!5m2!1ses!2shn"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "hue-rotate(15deg) saturate(1.2)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cobertura nacional - Artist's Stone Honduras"
                className="rounded-2xl"
              ></iframe>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xl mb-2">
                    ¿Necesitas ayuda inmediata?
                  </h4>
                  <p className="text-green-100">
                    Chatea con nosotros por WhatsApp desde cualquier parte del país
                  </p>
                </div>
                <a
                  href="https://wa.me/50432258461?text=Hola%20Artist's%20Stone,%20me%20interesa%20solicitar%20información%20sobre%20sus%20servicios%20en%20Honduras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-block"
                >
                  Abrir Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;