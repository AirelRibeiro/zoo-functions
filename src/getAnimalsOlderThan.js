const data = require('../data/zoo_data');

const { species } = data;

console.log(species.residents);

function getAnimalsOlderThan(animal, age) {
  return species.find((sp) => sp.name === animal).residents.every((rs) => rs.age >= age);
}

module.exports = getAnimalsOlderThan;
