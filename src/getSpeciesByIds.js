const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...identidades) {
  const ids = identidades;
  const result = [];
  ids.forEach((id) => {
    result.push(species.find((animal) => animal.id === id));
  });
  return result;
}

// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
