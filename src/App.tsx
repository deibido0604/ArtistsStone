import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-white p-8">
      <header className="bg-white shadow-lg rounded-2xl p-6 mb-8">
        <h1 className="text-4xl font-bold text-amber-700 text-center">
          🪨 Artist's Stone 🪨
        </h1>
        <p className="text-center text-stone-600 mt-2">
          Landing Page para muebles de granito - Configuración exitosa
        </p>
      </header>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-stone-800 mb-4">¡Proyecto configurado!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-6 rounded-xl">
            <h3 className="font-bold text-amber-800 mb-2">✅ Dependencias instaladas</h3>
            <ul className="text-stone-700 space-y-1">
              <li>• React + TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Lucide React Icons</li>
            </ul>
          </div>
          <div className="bg-stone-50 p-6 rounded-xl">
            <h3 className="font-bold text-stone-800 mb-2">🚀 Próximos pasos</h3>
            <ul className="text-stone-700 space-y-1">
              <li>1. Agregar componentes</li>
              <li>2. Personalizar contenido</li>
              <li>3. Desplegar proyecto</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Iniciar Desarrollo
          </button>
        </div>
      </div>
      
      <footer className="mt-8 text-center text-stone-500 text-sm">
        <p>Artist's Stone © {new Date().getFullYear()} - Muebles de granito, comedores y baños</p>
      </footer>
    </div>
  );
}

export default App;