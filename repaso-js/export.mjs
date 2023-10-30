const cerditosFelices = ['cerdoF 1', 'cerdoF 2', 'cerdoF 3'];
export const cerditosTriste = ['cerdoT 1', 'cerdoT 2', 'cerdoT 3'];
const cerditosSerios = ['cerdoS 1', 'cerdoS 2', 'cerdoS 3'];
const cerditosIntensos = ['cerdoI 1', 'cerdoI 2', 'cerdoI 3'];

// module.exports = { cerditosFelices, cerditosTriste };

const cerditosFn = () => {
  console.log('cerditosFn');
};
function cerditosFn2(){
  console.log('cerditosFn2')
}
export { cerditosSerios, cerditosIntensos, cerditosFn, cerditosFn2 };
export default cerditosFelices;
