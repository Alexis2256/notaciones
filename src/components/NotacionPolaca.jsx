import React from 'react';

const NotacionPolaca = ({ infija, postfija, valor }) => {
  return (
    <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-green-500/30">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        Notación Polaca (Postfija)
      </h2>
      <div className="bg-black/30 rounded-xl p-6 mb-4">
        <p className="text-gray-300 text-sm mb-2">Expresión Original (Infija):</p>
        <p className="text-white text-2xl font-mono font-bold mb-4">
          {infija}
        </p>
        <p className="text-gray-300 text-sm mb-2">Expresión Postfija:</p>
        <p className="text-white text-2xl font-mono font-bold">
          {postfija}
        </p>
      </div>
      <div className="bg-gradient-to-r from-yellow-500/30 to-orange-500/30 rounded-xl p-6 border-2 border-yellow-400">
        <p className="text-yellow-300 text-sm mb-2">Resultado Calculado:</p>
        <p className="text-white text-4xl font-bold">
          {valor}
        </p>
      </div>
    </div>
  );
};

export default NotacionPolaca;
