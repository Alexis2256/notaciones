import React from 'react';

const TablaTriplos = ({ triplos }) => {
  return (
    <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-blue-500/30">
      <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
        Representación en Triplos
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr className="bg-blue-600/50 border-b-2 border-blue-400">
              <th className="px-6 py-4 text-left font-bold">Ref</th>
              <th className="px-6 py-4 text-left font-bold">Operador</th>
              <th className="px-6 py-4 text-left font-bold">Arg1</th>
              <th className="px-6 py-4 text-left font-bold">Arg2</th>
            </tr>
          </thead>
          <tbody>
            {triplos.map((triplo, idx) => (
              <tr
                key={idx}
                className="border-b border-blue-400/30 hover:bg-blue-500/20 transition-colors"
              >
                <td className="px-6 py-4 font-mono font-bold">{triplo.id}</td>
                <td className="px-6 py-4 font-mono text-pink-300 font-bold text-lg">
                  {triplo.operador}
                </td>
                <td className="px-6 py-4 font-mono">{triplo.operando1}</td>
                <td className="px-6 py-4 font-mono">{triplo.operando2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TablaTriplos;
