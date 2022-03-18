const data = require('../data/zoo_data');

const { species } = data;

const retornoComLocalizacao = () => {
  return species.reduce((acc, { location, name }) => {
    if (!acc[location]) {
      acc[location] = [];
      acc[location].push(name);
    } else {
      acc[location].push(name);
    }
    return acc;
  }, {});
};

console.log(retornoComLocalizacao());

const retornoComNome = (opc) => species.reduce((acc, { location, residents, name }) => {
  let res = residents;
  if (!acc[location]) {
    acc[location] = [];
  }
  if (opc.sex) {
    res = residents
      .filter(({ sex }) => sex === opc.sex);
  }
  const res2 = res.map((anm) => anm.name);
  if (opc.sorted) {
    res2.sort();
  }
  acc[location].push({ [name]: res2 });
  return acc;
}, {});

console.log(retornoComNome({ includeNames: true, sex: 'female' }));

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return retornoComLocalizacao();
  }
  return retornoComNome(options);
}

console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NE);
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).NW);
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).SE);
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }).SW);

module.exports = getAnimalMap;
