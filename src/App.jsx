// src/App.jsx

import './App.css'; // Importa el archivo CSS para el fondo animado

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden text-gray-800">
      {/* Contenedor del fondo animado */}
      <div className="animated-background"></div>

      {/* Barra de navegación */}
      <nav className="relative z-10 p-6 flex justify-center">
        <ul className="flex space-x-4 md:space-x-8 text-lg font-semibold bg-white/30 backdrop-blur-md rounded-full px-6 py-3 shadow-lg">
          <li><a href="#el-problema" className="hover:text-blue-600 transition duration-300">El problema</a></li>
          <li><a href="#quimica-a-qubit" className="hover:text-blue-600 transition duration-300">De la química al qubit</a></li>
          <li><a href="#nuestro-proyecto" className="hover:text-blue-600 transition duration-300">Nuestro proyecto</a></li>
          <li><a href="#herramientas" className="hover:text-blue-600 transition duration-300">Herramientas y código</a></li>
          <li><a href="#blog" className="hover:text-blue-600 transition duration-300">Blog o noticias</a></li>
          <li><a href="#sobre-el-autor" className="hover:text-blue-600 transition duration-300">Sobre el autor</a></li>
        </ul>
      </nav>

      {/* Sección principal de la página de inicio */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center p-8 -mt-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-4">
          Descubrimiento de Fármacos con IA Cuántica
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 drop-shadow-md mb-8 max-w-4xl mx-auto">
          Un TFG que explora cómo la computación cuántica y la inteligencia artificial pueden acelerar el desarrollo de nuevos tratamientos, centrado en el estudio de inhibidores de la tirosina quinasa.
        </p>
      </main>
    </div>
  );
}

export default App;
