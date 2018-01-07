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

const me = new Person('Fufu the Killer', 32);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person ();
console.log(other.getGreeting());
console.log(other.getDescription());

