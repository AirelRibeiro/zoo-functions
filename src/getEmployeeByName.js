const data = require('../data/zoo_data');

const { employees } = data;

console.log(employees);

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  return employees.find((emp) => emp.firstName === employeeName || emp.lastName === employeeName);
}

module.exports = getEmployeeByName;
