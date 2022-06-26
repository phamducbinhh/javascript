// console.log(5 > 4); //true
// console.log("apple" > "pineapple"); //false  So sánh theo từ điển, do đó sai. "a" nhỏ hơn "p".
// console.log("2" > "12"); //true  Một lần nữa, so sánh từ điển, char đầu tiên của "2" lớn hơn char đầu tiên của "1".
// console.log(undefined == null); //true  Các giá trị null và không xác định chỉ bằng nhau.
// console.log(undefined === null); //false  So sánh nghiêm minh bình đẳng. Các loại khác nhau từ cả hai phía dẫn đến sai.

// // Sử dụng cấu trúc if..else, hãy viết code hỏi: ‘Tên “chính thức” của JavaScript là gì? “
// // const js = "ECMAS";
// // if(js == "ECMAScript"){
// //     console.log("đúng!");
// // }else{
// //     console.log("sa!");
// // }

// // Nếu khách truy cập nhập “ECMAScript”, thì xuất “Đúng!”, Ngược lại – xuất: “Không biết? ECMAScript! ”
// function js(string = "") {
//   if (string === "ECMAScript") {
//     return "đúng!";
//   } else {
//     return "sai!";
//   }
// }
// console.log(js("ECMAScript"));

// /**
//  * Sử dụng if..else, viết code nhận một số thông qua prompt và sau đó hiển thị trong alert:
//     1, nếu giá trị lớn hơn 0,
//     -1, nếu nhỏ hơn 0,
//     0 , nếu bằng không.
//     Trong tác vụ này, chúng ta giả định rằng đầu vào luôn là một số.
//  */
// function number(num) {
//   if (num > 0) {
//     return 1;
//   } else if (num < 0) {
//     return -1;
//   } else {
//     return 0;
//   }
// }
// console.log(number(10));

// //sử dụng toán tử 3 ngôi
// let result = a + b < 4 ? "bellow" : "over";

// // let message;

// // if (login == 'Employee') {
// //   message = 'Hello';
// // } else if (login == 'Director') {
// //   message = 'Greetings';
// // } else if (login == '') {
// //   message = 'No login';
// // } else {
// //   message = '';
// // }
// //sử dụng toán tử 3 ngôi
// let message =
//   login == "a"
//     ? "hello"
//     : login == "b"
//     ? "greeting"
//     : login == ""
//     ? "no login"
//     : "";

// /**
//      * Viết code yêu cầu đăng nhập với prompt.

// Nếu khách truy cập nhập “Admin“, sau đó nhắc nhập mật khẩu, nếu đầu vào là một dòng trống hoặc Esc – hiển thị “Canceled”, nếu là một chuỗi khác – thì hiển thị “Tôi không biết bạn”.

// Mật khẩu được kiểm tra như sau:

// Nếu nó bằng “cafedev”, thì hãy hiển thị “Chào mừng!”,
// Một chuỗi khác – hiển thị “Mật khẩu sai”,
// Đối với một chuỗi trống hoặc đầu vào đã hủy, hãy hiển thị “Đã hủy”
//      */

// let user = prompt("vui lòng đăng nhập!")
// if (user == "admin") {
//     let pass = prompt("vui lòng nhập mật khâu")
//     if (pass === "cafedev") {
//         alert("Chào mừng!")
//     } else if (pass.length < 8) {
//         alert("Mật khẩu sai!")
//     } else {
//         alert("mật khẩu không được để trống")
//     }
// } if (user == "" || user == null) {
//     alert("canceled")
// } else {
//     alert("tôi không biết bạn")
// }

//Sử dụng vòng lặp for để xuất ra các số chẵn từ 2 đến 10.
// for(let i=2;i<=10;i++){
//     if(i%2 == 0){
//         console.log("số chẵn là:",i);
//     }else{
//         console.log("số lẻ là:",i);
//     }
// }

//Viết lại code bằng cách thay đổi vòng lặp for thành while mà không làm thay đổi hành vi của nó (đầu ra phải giữ nguyên).

for (let i = 0; i < 3; i++) {
  console.log(i);
}

//chuyển sang while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

/**
 * Viết code switch dưới đây thành if else nhưng kết quả không đổi:
 * 
 * switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
 */

let browsers = "A";
if (browsers === "Edge") {
  console.log("You've got the Edge!");
} else if (
  browsers === "Chrome" ||
  browsers === "Firefox" ||
  browsers === "Safari" ||
  browsers === "Opera"
) {
  console.log("Okay we support these browsers too");
} else {
  console.log("We hope that this page looks ok!");
}

/**
 * Viết code if dưới đây thành switch nhưng kết quả không đổi:
 * let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
 */

let key = 0;
switch (key) {
  case 0:
    console.log("0");
    break;
  case 1:
    console.log("1");
    break;
  case 2:
  case 3:
    console.log("2,3");
  default:
    break;
}

/**
 * Thay thế Biểu thức hàm bằng các hàm mũi tên trong đoạn code dưới đây:

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
 */