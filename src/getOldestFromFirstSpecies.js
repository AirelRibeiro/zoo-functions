const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find((emp) => emp.id === id).responsibleFor[0];
  const animalList = species.find((anm) => anm.id === animalId).residents;
  const animal = animalList.reduce((anm1, anm2) => (anm1.age > anm2.age ? anm1 : anm2));
  return Object.values(animal);
}

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
