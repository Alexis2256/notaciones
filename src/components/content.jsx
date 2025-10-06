import React, { useState } from 'react';
import Formulario from './Formulario';
import NotacionPolaca from './NotacionPolaca';
import TablaTriplos from './TablaTriplos';
import TablaCuadruplos from './TablaCuadruplos';
import Ejemplos from './Ejemplos';
import {
  infijaAPostfija,
  generarTriplos,
  generarCuadruplos,
  evaluarPostfija,
} from '../utils/conversores';

const Content = () => {
  const [expresion, setExpresion] = useState('');
  const [resultado, setResultado] = useState(null);

  const procesar = () => {
    if (!expresion.trim()) {
      alert('Por favor, ingresa una expresión válida');
      return;
    }

    try {
      const postfija = infijaAPostfija(expresion);
      const triplos = generarTriplos(postfija);
      const cuadruplos = generarCuadruplos(postfija);
      const valor = evaluarPostfija(postfija);

      setResultado({
        infija: expresion,
        postfija: postfija.join(' '),
        triplos,
        cuadruplos,
        valor,
      });
    } catch (error) {
      alert('Error al procesar la expresión. Verifica la sintaxis.');
    }
  };

  const limpiar = () => {
    setExpresion('');
    setResultado(null);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-white mb-4">
          Representación de Código Intermedio
        </h1>
        <p className="text-gray-300 text-lg">
          Conversión de notación infija a polaca, triplos y cuádruplos
        </p>
      </div>

      <Formulario
        expresion={expresion}
        setExpresion={setExpresion}
        onProcesar={procesar}
        onLimpiar={limpiar}
      />

      {resultado && (
        <div className="space-y-6">
          <NotacionPolaca
            infija={resultado.infija}
            postfija={resultado.postfija}
            valor={resultado.valor}
          />
          <TablaTriplos triplos={resultado.triplos} />
          <TablaCuadruplos cuadruplos={resultado.cuadruplos} />
        </div>
      )}

      {!resultado && <Ejemplos onSeleccionar={setExpresion} />}
    </div>
  );
};

export default Content;
