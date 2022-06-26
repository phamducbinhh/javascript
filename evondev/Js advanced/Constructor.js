//declartion , new, this, prototype, super, call, apply

// let students = {
//   name: "Nguyen Van A",
//   age: 20,
// };

//constructor function person student

function Student(name, age) {
  //this = {}
  // add property to this
  this.name = name;
  this.age = age;

  //   this.getName = function () {
  //     return ` your name ${this.name}`;
  //   };
  // return this;
}

//tương tự như let student2 = {
//   name: "Nguyen Van B",
//   age: 21,
// }
let student2 = new Student("Nguyen Van B", 21);
console.log(student2);

// ôn lại constructor
function Person(name) {
  this.name = name;
}
//prototype
// Person.prototype.getName = function () {
//   console.log(`your name is ${this.name}`);
// };

// const person = new Person("Nguyen Van A");

// person.getName();

//objetc constructor

function User(firstName, lastName, avarta) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avarta = avarta;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const author = new User("Nguyen", "Van A", "avarta.jpg");
//tương tự
//const author = {
//   firstName: "Nguyen",
//   lastName: "Van A",
//   avarta: "avarta.jpg",
// }
const user = new User("Nguyen", "Van B", "avarta.jpg");
console.log(author);
console.log(user);

