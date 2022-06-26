//callback function

function sayHello(callBack) {
  callBack();
}

sayHello(() => {
  //   console.log("JavaScript is cool");
});

function sumCb(a, b) {
  return a + b;
}
function subCb(a, b) {
  return a - b;
}
function multiCb(a, b) {
  return a / b;
}
function caculate(a, b, cb) {
  return cb(a, b);
}
const divCb = (a, b) => a * b;
// console.log(caculate(1, 2, sumCb));
// console.log(caculate(1, 2, subCb));
// console.log(caculate(1, 2, multiCb));
// console.log(caculate(3, 1, divCb));

// callback function
const courses = ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"];

const htmls = courses.map((course) => {
  return `<h2>${course}</h2>`;
});

console.log(htmls.join(""));

//ĐỊNH NGHĨA MAP    //map trả về một mảng mới

//ví dụ về call back

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newData = data.filter((item) => {
//   return item % 2 === 0;
// })
// console.log(newData);

function sumFilter(item) {
  return item % 2 === 0;
}

const newData = data.filter(sumFilter);
console.log(newData);
