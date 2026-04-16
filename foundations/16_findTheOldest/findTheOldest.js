const findTheOldest = function (people) {
  const oldest = people.reduce((oldest, person) => {
    const getAge = (person) => {
      const yearOfBirth = person.yearOfBirth;
      let yearOfDeath = person.yearOfDeath;
      if (yearOfDeath === undefined) yearOfDeath = new Date().getFullYear();
      return yearOfDeath - yearOfBirth;
    };

    if (oldest === null) return person;
    const currentOldestAge = getAge(oldest);
    const personAge = getAge(person);
    return currentOldestAge > personAge ? oldest : person;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
