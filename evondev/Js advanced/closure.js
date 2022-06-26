//closure trong vòng lặp

for (let i = 1; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

//var -> hoisting
// let -> not hoisting

//let -> scope sẽ thay đổi sau mỗi lần chạy

//scope của var sau mỗi vòng lặp thì nó không thay đổi

//closure trong hàm
//fuction con có thể truy cập đến biến của function cha
function sayHello() {
  //parent function
  let name = "Nguyen";
  function sayHi() {
    // child function
    console.log(name);
  }
  return sayHi;
}
let hello = sayHello();
hello();

