const data = require('../data/zoo_data');

const { species } = data; // Traz o array species para ser usado nesse escopo

function countAnimals(animal) { // Parâmetro é um objeto
  if (!animal) { // Se o parametro 'animal' não existir
    const objeto = {}; // Objeto vazio que será retornado
    species.forEach(({ name, residents }) => { // forEach para percorrer o array species, usando o object destructuring para acessar as propriedades name e residents
      objeto[name] = residents.length; // Cria uma chave com o name do animal e o número de residents
    });
    return objeto; // Retorna o objeto após ser preenchido no forEach
  }
  const anm = animal.specie; // Armazena o valor contido na chave specie do objeto fornecido (que é o nome do animal ex.: 'lions')
  const anms = species.find(({ name }) => name === anm); // Armazena como resultado o primeiro item cujo name corresponde ao anm
  if (animal.sex) { // Condicional para verificar se o objeto contém a chave sex
    const anmSex = animal.sex; // Armazena o valor contido na chave sex do objeto fornecido
    const anmSexs = anms.residents.filter(({ sex }) => sex === anmSex); // Filtra e retorna um array com os animais residentes colocados em anms que possuem o sex pesquisado
    return anmSexs.length; // Retorna o tamanho do array, ou seja a quantidade de animais correspondentes ao objeto pedido, com filtro sex
  }
  return anms.residents.length; // Retorna o tamanho do array, ou seja a quantidade de animais correspondentes ao objeto pedido se não existir chave sex
}

console.log(countAnimals());

module.exports = countAnimals;
