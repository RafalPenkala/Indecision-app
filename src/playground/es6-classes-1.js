class Person {
  constructor(name = 'Anonymous', age = 0) {
   this.name = name;
   this.age = age;
  }

  getGreeting() {
    return `Hi! My name is ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old.`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  get getDescription() {
  let description = super.getDescription();

  if(this.hasMajor()) {
  description += ` His major is ${this.major}.`
  }
  return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  homeLocation() {
    return !!this.homeLocation;
  }

  get getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting +=  ` I'm visiting from ${this.homeLocation}.`
    }
    return greeting;
  }
}

const me = new Traveler('Fufu the Killer', 32, 'Gdansk');
console.log(me.getGreeting);

const other = new Traveler();
console.log(other.getGreeting);

