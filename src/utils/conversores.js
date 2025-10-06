export const precedencia = (op) => {
  if (op === '+' || op === '-') return 1;
  if (op === '*' || op === '/') return 2;
  if (op === '^') return 3;
  return 0;
};

export const infijaAPostfija = (expr) => {
  const pila = [];
  const salida = [];
  const tokens = expr.match(/[a-zA-Z]+|\d+\.?\d*|[+\-*/^()]/g) || [];

  for (let token of tokens) {
    if (!isNaN(token) || /^[a-zA-Z]+$/.test(token)) {
      salida.push(token);
    } else if (token === '(') {
      pila.push(token);
    } else if (token === ')') {
      while (pila.length > 0 && pila[pila.length - 1] !== '(') {
        salida.push(pila.pop());
      }
      pila.pop();
    } else {
      while (
        pila.length > 0 &&
        precedencia(pila[pila.length - 1]) >= precedencia(token)
      ) {
        salida.push(pila.pop());
      }
      pila.push(token);
    }
  }

  while (pila.length > 0) {
    salida.push(pila.pop());
  }

  return salida;
};

export const evaluarPostfija = (postfija) => {
  const pila = [];
  let tieneVariables = false;

  for (let token of postfija) {
    if (!isNaN(token)) {
      pila.push(parseFloat(token));
    } 
    else if (/^[a-zA-Z]+$/.test(token)) {
      tieneVariables = true;
      pila.push(token);
    } 
    else {
      const b = pila.pop();
      const a = pila.pop();
      
      if (tieneVariables || isNaN(a) || isNaN(b)) {
        pila.push(`(${a} ${token} ${b})`);
        continue;
      }

      let resultado;
      switch (token) {
        case '+':
          resultado = a + b;
          break;
        case '-':
          resultado = a - b;
          break;
        case '*':
          resultado = a * b;
          break;
        case '/':
          resultado = a / b;
          break;
        case '^':
          resultado = Math.pow(a, b);
          break;
        default:
          resultado = 0;
      }
      pila.push(resultado);
    }
  }

  return tieneVariables ? 'No se puede evaluar (contiene variables)' : pila[0];
};

export const generarTriplos = (postfija) => {
  const triplos = [];
  const pila = [];
  let temp = 1;

  for (let token of postfija) {
    if (!isNaN(token) || /^[a-zA-Z]+$/.test(token)) {
      pila.push(token);
    } else {
      const op2 = pila.pop();
      const op1 = pila.pop();
      const temporal = `t${temp}`;
      triplos.push({
        id: temp,
        operador: token,
        operando1: op1,
        operando2: op2,
      });
      pila.push(temporal);
      temp++;
    }
  }

  return triplos;
};

export const generarCuadruplos = (postfija) => {
  const cuadruplos = [];
  const pila = [];
  let temp = 1;

  for (let token of postfija) {
    if (!isNaN(token) || /^[a-zA-Z]+$/.test(token)) {
      pila.push(token);
    } else {
      const op2 = pila.pop();
      const op1 = pila.pop();
      const temporal = `t${temp}`;
      cuadruplos.push({
        id: temp,
        operador: token,
        operando1: op1,
        operando2: op2,
        resultado: temporal,
      });
      pila.push(temporal);
      temp++;
    }
  }

  return cuadruplos;
};
