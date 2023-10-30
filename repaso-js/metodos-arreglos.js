const arr = [5, 1, 2, 3, 4, 5];

const r = arr.filter((el, i) => {
  console.log(i);
  return el > 2;
});
console.log(r);

const mapped = arr.map((el, i) => `<h1>${el * 2}</h1>`);
console.log(mapped);

const users = [
  { id: 1, name: 'Jairo' },
  { id: 2, name: 'Jairo Feliz' },
  { id: 3, name: 'Jairo Triste' },
  { id: 4, name: 'Felipe' },
];

const mapped2 = users.map((user, i) => `<h2>${user.name}</h2>`);
console.log(mapped2);

/* Reduce */
//arr = [5, 1, 2, 3, 4, 5];

/* Valor maximo de un array */
// const getMax = (a,b) => Math.max(a,b);
// const r1 = arr.reduce(getMax,0);

/* Reduce para realizar una concatenación de los datos separados por comas */
// const r1 = users.reduce((acc, el) => `${acc === '' ? '' : `${acc}, `}${el.name}`, '');

/* Filter y map utilizando reduce */
const r1 = users.reduce((acc, el ) => {
  if(el.id < 2){
    return acc
  } return acc.concat(el)
},[])
console.log(r1);
