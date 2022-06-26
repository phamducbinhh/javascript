// object literal
const objectLiteral = {};
//object constructor
const objectConstructor = new Object();

//object là 1 dối tượng
//empty object {}
const students = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "binh",
  //   hi: function () {
  //     // console.log("hello");
  //   },
  //method  -> function trong objetc
};
//properties truy xuất
//có 2 cách truy xuât object
//2.1 dot notation (dấu .)
console.log(students.name);
//2.2 bracket notation ["key"]
console.log(students["age"]);
console.log(students["last-name"]);
//thay đổi giá trị của object
//ghi đè giá trị
students.age = 19;
students.male = "nam";
//cách xóa giá trị trong object
delete students["last-name"];
console.log(students);
console.log("========================");

//========================
for (let key in students) {
  if (key === "name") {
    console.log("hello name");
  }
  const value = students[key];
  console.log(`${key}:${value}`);
}

//object.key(object) -> trả về 1 mảng chứa tất cả các key của object
console.log("==================");
const keys = Object.keys(students);
const leng = keys.length; //độ dài của mảng object
console.log(keys);
console.log(leng);

//object.values(object)-> trả về 1 mảng chứa tất cả các giá trị của object
console.log("==================");
const values = Object.values(students);
console.log(values);

//OBJECT.ENTRIES(OBJECT) -> trả về 1 mảng nested [["name"],["evondev"],["age":20]] gồm key và value

const entries = Object.entries(students);
console.log("==================");
console.log(entries);

//Object.assign()
const a = {
  firsName: "binh",
};
const b = {
  lasName: "pham",
};
const c = Object.assign(a, b);
console.log("==================");
console.log(c);
const d = { ...a, ...b };
console.log(d);

//Object.freeze(object) ->ngăn chặn chỉnh sửa key và values trong object

const car = {
  brand: "BWM",
};
const newCar = Object.freeze(car);
newCar.brand = "Audi";
console.log("==================");
console.log(newCar); //BMW

//OBJETC.SEAL(OBJECT) -> Cho phép chỉnh sửa key nhưng không được phép thêm value mới
const user = {
  userName: "evondev",
  school: {
    name: "FPT",
    room: {
      name: "front-end",
    },
  },
};
// const newUser = Object.seal(user);
// newUser.userName = "phamducbinh";
// newUser.lastName = "evon"
console.log("==================");
// console.log(newUser);

//sao chép 1 object
//spread operator [...array] {...object}
const newUser = { ...user };
newUser.userName = "pham binh boong";
console.log(user);
console.log(newUser);
const newUser2 = Object.assign({}, user);
const newUser3 = JSON.parse(JSON.stringify(user));
newUser3.school.name = "designer";
console.log("new user3", newUser3);

//this keyword
//this nó sẽ đề cập tới object gần nhất
const students2 = {
  name: "evondev",
  age: 27,
  male: true,
  "last-name": "binh",
  hi: function () {
    console.log(`my name is ${this.name} i am is a ${this.age}`);
  },
  fullname: {
    name: "javascript",
  },
};
console.log("-------------------------");
students2.hi();

//optional chaining
console.log(students2.fullname); //undefined
if (students2.fullname) {
  if (students2.fullname.name) {
    console.log(students2.fullname.name);
  }
}

//destructuring object
const { name, age, male } = students2;
console.log(name, age, male);

function whatYourInfo(name, age, school) {
  console.log(name, age, school);
}
whatYourInfo("");

