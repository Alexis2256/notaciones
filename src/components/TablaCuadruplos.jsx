import React from 'react';

const TablaCuadruplos = ({ cuadruplos }) => {
  return (
    <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-purple-500/30">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        Representación en Cuádruplos
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-purple-600/50 border-b-2 border-purple-400">
              <th className="px-6 py-4 text-left font-bold">#</th>
              <th className="px-6 py-4 text-left font-bold">Operador</th>
              <th className="px-6 py-4 text-left font-bold">Arg1</th>
              <th className="px-6 py-4 text-left font-bold">Arg2</th>
              <th className="px-6 py-4 text-left font-bold">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {cuadruplos.map((cuadruplo, idx) => (
              <tr
                key={idx}
                className="border-b border-purple-400/30 hover:bg-purple-500/20 transition-colors"
              >
                <td className="px-6 py-4 font-mono font-bold">{cuadruplo.id}</td>
                <td className="px-6 py-4 font-mono text-pink-300 font-bold text-lg">
                  {cuadruplo.operador}
                </td>
                <td className="px-6 py-4 font-mono">{cuadruplo.operando1}</td>
                <td className="px-6 py-4 font-mono">{cuadruplo.operando2}</td>
                <td className="px-6 py-4 font-mono text-yellow-300 font-bold">
                  {cuadruplo.resultado}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaCuadruplos;
