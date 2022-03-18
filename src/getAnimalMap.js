const data = require('../data/zoo_data');

const { species } = data; // Traz o array species para ser usado nesse escopo

const retornoComLocalizacao = () => species.reduce((acc, { location, name }) => { /* Function que usa reduce para gerar objeto caso não haja parâmetros ou includesnão exista; o segundo parâmetro usa object destructuring para recolher location e name do objetoatual */
  if (!acc[location]) { // Verifica se a chave daquela location existe
    acc[location] = []; // Cria a chave e atribui a ela um array vazio
    acc[location].push(name); // Coloca dentro do array da location atual o name desse objeto
  } else { // Caso a chave exista, njão entra no if e executa esse else
    acc[location].push(name); // Coloca dentro do array da location atual o name desse objeto
  }
  return acc; // Retorna acc a cada iteração
}, {});

const retornoComNome = (opc) => species.reduce((acc, { location, residents, name }) => { /* Function para gerar objeto a partir de qualquer especificação que seja passada como parâmetros em getAnimalMap, o segundo parâmetro usa object destructuring para recolher location, residents e name do objetoatual */
  let res = residents; // let para armazenar o array de residents
  if (!acc[location]) { // Se a chave com location do objeto não existir
    acc[location] = []; // Cria a chave e atribui a ela um array vazio
  }
  if (opc.sex) res = residents.filter(({ sex }) => sex === opc.sex); // Se o objeto possuir a chave sex, atualiza a let res para ser um array com os animais apenas do sex fornecido
  const resName = res.map((anm) => anm.name); // Coloca em uma uma constante o res passado pelo map, retornando um array com os 'names'
  if (opc.sorted) resName.sort(); // Se o objeto possuir a chave sorted, ordena pela ordem alfabética, pelo padrão do método '.sort'
  acc[location].push({ [name]: resName }); // Puxa para o array da chave location no objeto acc um objeto contendo name declarado na linha 15 e a const resName
}, {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) { // Se sem parâmetro ou sem includeNames
    return retornoComLocalizacao(); // Executa retornoComLocalizacao
  }
  return retornoComNome(options); // Em qualquer outro caso, executa retornoComNome usando o que foi oferecido em options
}

module.exports = getAnimalMap;
