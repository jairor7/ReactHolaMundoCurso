function Fn() {
  this.prop = 'propiedad';
}

/* Cuando una funcion se crea con la palabra reservada new ignora el return y se retorna el 
valor de this. 
  Fn { prop: 'propiedad' }
*/

/* Tambien tiene el prototype se puede asignar  */
Fn.prototype.propiedadNueva = function Fun(){};

const r = new Fn();

/* Si se quiere imprimir el prototype, se hace de la siguiente manera:  */
console.log(r); // Resultado =>  Fn { prop: 'propiedad' }

/* Si se quiere imprimir el prototype, se hace de la siguiente manera:  */
console.log(r.__proto__); // Resultado =>  { propiedadNueva: [Function: Fun] }




/*________________________fat arrow function________________________________*/
// Las fat arrow functions no tienen contexto THIS!!!!!!!!
const fatFN = () => {
  const obj = {}
  obj.prop = 'function :S';
  return obj
}

// const r1 = new fatFN() // No puede ser llamada con la palabra reservada new
const r2 = fatFN()
console.log(r2)

// Returno implicito
const fnR = () => 2

console.log(fnR())