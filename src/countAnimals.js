const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  if (!animal) {
    const objeto = {};
    species.forEach((spc) => {
      objeto[spc.name] = spc.residents.length;
    });
    return objeto;
  }
  const anm = animal.specie;
  const anms = species.find((spc) => spc.name === anm);
  if (animal.sex) {
    const anmSex = animal.sex;
    const anmSexs = anms.residents.filter((res) => res.sex === anmSex);
    return anmSexs.length;
  }
  return anms.residents.length;
}

console.log(countAnimals());

module.exports = countAnimals;
