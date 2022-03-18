const data = require('../data/zoo_data');

const { species, hours } = data;

const seForDia = (diaPedido) => {
  const doDia = species
    .filter(({ availability }) => (availability.includes(diaPedido)));
  const dia = hours[diaPedido];
  const final = {
    [diaPedido]: {
      officeHour: `Open from ${dia.open}am until ${dia.close}pm`,
      exhibition: doDia.map(({ name }) => name),
    },
  };
  return final;
};

const geraHorario = (day) => {
  const dia = hours[day];
  return `Open from ${dia.open}am until ${dia.close}pm`;
};

const geraAnimais = (d) => {
  const anms = species.filter((spc) => spc.availability.includes(d));
  return anms.map(({ name }) => name);
};

const monday = {
  officeHour: 'CLOSED',
  exhibition: 'The zoo will be closed!',
};

const semParametro = () => {
  const objetoFinal = {
    Tuesday: null,
    Wednesday: null,
    Thursday: null,
    Friday: null,
    Saturday: null,
    Sunday: null,
    Monday: monday,
  };
  species.forEach(({ availability }) => {
    availability.forEach((day) => {
      objetoFinal[day] = {
        officeHour: geraHorario(day),
        exhibition: geraAnimais(day),
      };
    });
  });
  return objetoFinal;
};

function verificaDia(dia) {
  const dias = Object.keys(hours);
  return dias.some((d) => d !== 'Monday' && d === dia);
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: monday };
  }
  if (verificaDia(scheduleTarget)) {
    return seForDia(scheduleTarget);
  }
  if (species.some(({ name }) => name === scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return semParametro();
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
