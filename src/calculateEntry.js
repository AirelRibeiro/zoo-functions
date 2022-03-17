const data = require('../data/zoo_data');

const { prices } = data;

const entrant = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

function countEntrants(entrants) {
  let child = 0;
  let adult = 0;
  let senior = 0;
  entrants.forEach((person) => {
    if (person.age < 18) {
      child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      adult += 1;
    } else {
      senior += 1;
    }
  });
  return {
    child,
    adult,
    senior,
  };
}

console.log(countEntrants(entrant));

function calculateEntry(entrants = 0) {
  let total = 0;
  if (entrants.length > 0) {
    const entr = Object.entries(countEntrants(entrants));
    total = entr.reduce((acc, atual) => acc + prices[atual[0]] * atual[1], 0);
  }
  return total;
}

console.log(calculateEntry());
module.exports = { calculateEntry, countEntrants };
