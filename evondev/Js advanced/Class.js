//ES6 Class syntax
// ôn lại constructor
// function Person(name) {
//   this.name = name;
// }
// //prototype
// Person.prototype.getName = function () {
//   console.log(`your name is ${this.name}`);
// };

// const person = new Person("Nguyen Van A");

// person.getName();

//Class
class Person {
  constructor(name) {
    this.name = name;
  }
  //getter and setter
  get name() {
    return this._name;
  }
  //   getName() {
  //     return this.name;
  //   }

  //setter
  set name(newName) {
    this._name = newName;
  }
  //   setName(newName) {
  //     this.name = newName;
  //   }
}

const jobs = new Person("Frondend Developer");
console.log(jobs.name);
jobs.name = "Backend Developer";
console.log(jobs.name);
