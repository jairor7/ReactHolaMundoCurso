// const Rectangulo = class R {

// }

class Rectangulo {

}

/* Definicion de Hoisting: Es cuando las variables var o function se llevan a la parte
superior del archivo al momento de compilar y pueden ser usadas en cualquier parte del archivo */

function Cuadrado() {}
// console.log(Cuadrado, Rectangulo);

// const r = new Rectangulo();

class Cerdo {
  propiedad = 'mi propiedad';
  #hambre = false;
  static estatico = 42;
  constructor(estado = 'feliz', hambre = false) {
    this.estado = estado;
    this.#hambre = hambre;
  }

  hablar(){
    console.log(`Soy un cerdo ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho!'}`);
  }

  static comer(){
    console.log(this.estatico,'Estoy comiendo!')
  }
}

Cerdo.comer();
const feliz = new Cerdo('feliz', true);
// console.log(feliz.__proto__.hablar);
// feliz.hablar();
// const triste = new Cerdo('triste');
// triste.hablar();
// const nose = new Cerdo();
// nose.hablar();
