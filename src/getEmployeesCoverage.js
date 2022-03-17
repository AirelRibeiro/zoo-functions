const data = require('../data/zoo_data');

const { species, employees } = data;

const verificaNome = (objeto) => {
  const empName = objeto.name;
  const empObj = employees.find((emp) => emp.firstName === empName || emp.lastName === empName);
  return empObj;
};

const verificaId = (objeto) => {
  const empId = objeto.id;
  const empObj = employees.find((emp) => emp.id === empId);
  return empObj;
};

const listOfEmpls = () => {
  let id;
  let fullName;
  let arrayOfSpc;
  const arrayFinal = [];
  employees.forEach((emp) => {
    id = emp.id;
    fullName = `${emp.firstName} ${emp.lastName}`;
    arrayOfSpc = species.filter((spc) => (emp.responsibleFor.includes(spc.id)));
    const obj = {
      id,
      fullName,
      species: arrayOfSpc.map((spc) => spc.name),
      locations: arrayOfSpc.map((spc) => spc.location),
    };
    arrayFinal.push(obj);
  });
  return arrayFinal;
};

const listEmpl = (obj) => {
  const arrayOfSpc = species.filter((spc) => (obj.responsibleFor.includes(spc.id)));
  const idAndName = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: arrayOfSpc.map((spc) => spc.name),
    locations: arrayOfSpc.map((spc) => spc.location),
  };
  return idAndName;
};

function getEmployeesCoverage(objeto) {
  if (!objeto) {
    return listOfEmpls();
  }
  let empl;
  if (objeto.name) {
    empl = verificaNome(objeto);
  } else {
    empl = verificaId(objeto);
  }
  if (!empl) {
    throw new Error('Informações inválidas');
  } else {
    return listEmpl(empl);
  }
}

module.exports = getEmployeesCoverage;
