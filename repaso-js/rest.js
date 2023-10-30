const rest = (a, b, c, ...arg) => {
  console.log(a, arg);
};

rest(1, 2, 3);

/* Destructuring */
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
};

// const { a, b, ...restObj } = obj;
// console.log(b, restObj);

const arr = [1, 2, 3, 4, 5];

const [a, b, ...restArray] = arr;
console.log(a,b, restArray);

/* Como funciona en React? */
const useState = () => ['Valor', () => {}]
const [valor , setValor] = useState();
console.log(valor, setValor);
