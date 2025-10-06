import React from 'react';

const Formulario = ({ expresion, setExpresion, onProcesar, onLimpiar }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl mb-8">
      <label className="block text-white text-lg font-semibold mb-4">
        Ingresa una expresión infija:
      </label>
      <div className="flex gap-4">
        <input
          type="text"
          value={expresion}
          onChange={(e) => setExpresion(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && onProcesar()}
          placeholder="Ejemplo: a + b * c  o  3 + 5 * 2"
          className="flex-1 px-6 py-4 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-400/50 transition-all text-lg"
        />
        <button
          onClick={onProcesar}
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-purple-700 transform hover:scale-105 transition-all shadow-lg"
        >
          Procesar
        </button>
        <button
          onClick={onLimpiar}
          className="px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-xl hover:from-gray-700 hover:to-gray-800 transform hover:scale-105 transition-all shadow-lg"
        >
          Limpiar
        </button>
      </div>
      <p className="text-gray-300 text-sm mt-3">
        Operadores soportados: +, -, *, /, ^, ( ) | Variables: a-z, A-Z
      </p>
    </div>
  );
};

export default Formulario;
