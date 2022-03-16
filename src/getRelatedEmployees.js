const data = require('../data/zoo_data');

const { employees } = data;

// console.log(employees);

function isManager(id) {
  return employees.some((emp) => emp.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managersEmp = employees.filter((emp) => emp.managers.includes(managerId));
    return managersEmp.map((emp) => `${emp.firstName} ${emp.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
