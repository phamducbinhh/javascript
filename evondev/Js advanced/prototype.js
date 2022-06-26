//string , number , boolean

//string.prototype , number.prototype , boolean.prototype

let str = "hello";

String.prototype.duplicate = function () {
  return this + this;
};
// console.log(str.duplicate());

//contructor function
function Girl() {
  this.cook = function () {
    // console.log("your girlfriend can cook");
  };
}

//prototype kế thừa
Girl.prototype.sing = function () {
  // console.log("your Girl can sing");
};

let jane = new Girl();
jane.cook();
jane.sing();

// ôn lại constructor
function Person(name) {
  this.name = name;
}
//prototype
Person.prototype.getName = function () {
  // console.log(`your name is ${this.name}`);
};

const person = new Person("Nguyen Van A");

person.getName();




//objetc prototype
function User(firstName, lastName, avarta) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avarta = avarta;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User.prototype.className = "class 1";
User.prototype.getClass = function () {
  return `your class is ${this.className}`;
};
const user = new User("Nguyen", "Van B", "avarta.jpg");

console.log(user.getClass());
