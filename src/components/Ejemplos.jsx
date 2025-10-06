import React from 'react';

const Ejemplos = ({ onSeleccionar }) => {
  const ejemplos = [
    '3 + 5 * 2',
    '(3 + 5) * 2',
    '10 - 8 / 4',
    '2 ^ 3 + 5',
    '(5 + 3) * (2 - 1)',
    '15 / 3 + 4 * 2',
    'a + b * c',
    '(x + y) * z',
    'a * b + c / d',
  ];

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
      <h3 className="text-xl font-bold text-white mb-4">Ejemplos de Expresiones:</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {ejemplos.map((ejemplo, idx) => (
          <button
            key={idx}
            onClick={() => onSeleccionar(ejemplo)}
            className="px-4 py-3 bg-white/10 hover:bg-white/20 rounded-lg text-white text-left border border-white/20 hover:border-pink-400 transition-all"
          >
            {ejemplo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Ejemplos;
