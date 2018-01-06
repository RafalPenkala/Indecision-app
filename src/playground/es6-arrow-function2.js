// arguments object - no longer bound  with arrow function

const add = (a, b) => {
  return a + b;
};

console.log (add(55, 3));

//this keyword - no longer bound

const user = {
  name: 'Puff',
  cities: ['Korytkowo', 'Zawory', 'Sznurki'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 4, 5],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());