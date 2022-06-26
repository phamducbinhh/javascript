/**
 * Biến (Variables) và Kiểu biến (Type Variable)
 *
 * -Dùng VAR ,LET COSNT để khai báo biến
 * -Sự khác nhau giữa var let const
 */
let fulName = " Phạm Đức Bình"; //biến viết theo mlcase

var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);

var a = 2;
console.log(a); //var có thể khai báo lại được

// const c= 4 //lỗi

//==============================
/**
 * kiểu dữ liệu của biến
 * -Number
 * -string
 * -array
 * -boolean
 * -Undefined
 * -null
 * -symbol
 * -fucntion
 * -object
 */

var x; // typeof x = "undefined"
x = "Dyno"; // string
x = 10; // number
x = {}; // object
x = []; //array
x = function () {}; // function
x = null; // object
x = false; // boolean

//null: có giá trị nhưng là ra trị vô nghĩa
//undefined : là không  có giá trị

//=====================================
/**
 * Input và Output trong JS
 */
//cách 1
var age = prompt("Nhập tuổi của bạn: ");

//dùng console log
var x = 10;
console.log(x); // Cách này tiện nhất

//====================================

/**
 *
 * 4. Toán tử (Operator)
 * Toán tử gán (Assignment Operators): = += -= *= /= %= **=
 * Toán tử so sánh (Comparison Operators): == === != !== > < >= <= ?
 * Toán tử logic (Logical Operators): && || !
 *
 * == : so sánh về giá trị
 * ===: so sánh về cả giá trị và kiểu dữ liệu
 *
 * &&: 1 về false là tất cả false
 * ||: 1 về true là tất cả true
 *
 */
let a = 10;

let z = "10";

if (a === z) {
  console.log("true");
} else {
  console.log("false");
}

//================================================

/**
 * Câu điều kiện (Conditionals)
 */

//if else
const a = 3;
if (a === 3) {
  console.log("true"); //đúng thì vào đây
} else if (a !== 3) {
  console.log("false"); //sai thì vô đây
} else {
  console.log("log");
}

//switch case
switch (variables) {
  case value1:
    //Thực hiện khi giá trị biến bằng value
    break;
  case value2:
    //thực hiện khi giá trị biến bằng value 2
    break;
  default:
  //thực hiện trường hợp cuối cùng
}

//======================================
/**
 * vòng lặp loop
 */
//vòng lặp for
for (let i = 0; i < 10; i++) {
  console.log(i); //đoạn code được chạy 10 lần
}
//result : 0 1 2 3 4 5 6 7 8 9
//i= 0 : là giá trị khởi tạo i =0
// i<10 : điều kiện dừng vòng lặp(lhi i = 9 thì dừng vòng lặp)
//i++ sau mỗi vòng lặp tăng i lên 1 đơn vị cho đến khi i = 9 thì dừng

let arr = [1, 2, 3, 4, 5, 6];
// 6,5,4,3,2,1 duyệt theo chiều ngược lại
for (let i = arr.length - 1; i >= 0; i--) {
  console.log(arr[i]);
}

//vòng lặp while
while (condition) {
  // do something
}
//Trong đó condition là điều kiện dừng vòng lặp, nếu condition đúng thì vòng lặp sẽ được thực thi cho tới khi condition có giá trị sai. Chính vì vậy nếu condition luôn luôn đúng thì vòng lặp sẽ dẫn tới lặp vô hạn.
var i = 1;
while (i <= 10) {
  console.log(i);
  i++; // tăng i lên nếu không sẽ bị lặp vô hạn
}

// Cấu trúc vòng lặp do while:
do {
  // some thing
} while (condition); //Trong đó condition là điều kiện để dừng vòng lặp

//break, continue

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break; //phá vỡ vòng lăp thoát ra vòng lặp hiện tại
  }
  console.log(i); // 0,1,2
}

//======================================================

/**
 * fucntion : hàm
 */

//khai báo
function name1(a, b) {
  a + b;
  return 1000;
}

//cách 2 gán fucntion vào biến
let name2 = function (a, b) {
  a + b;

  return 1000;
};

// khai báo hàm
function sum(num1, num2) {
  return num1 + num2;
}
// thực hiện hàm
const result = sum(2, 3);
console.log(result); // 5

//======================================

/**
 * object : đối tượng trong javascript
 */
// Tạo một đối tượng person chứa thông tin của một người
const person = {
  name: "Dyno",
  age: 18,
  country: "Việt Nam",
  talk: function () {
    console.log("Hello");
  },
};
// truy xuất các thuộc tính, phương thức của đối tượng
console.log(person.name); // "Dyno"
console.log(person["age"]); // 18 - cách truy xuất khác
person.talk(); // Hello

//====================================================
/**
 * Mảng tron js
 */

let languages = [
  "Java",
  "kolin",
  "javascript",
  "ruby",
  "PHP",
  "NodeJs",
  null,
  undefined,
  1,
  2,
  3,
];

const arr1 = [1, 2, 3, 4, 5];
console.log(arr[1]); // 2
arr[1] = "Dyno"; // Không nên làm vầy
console.log(arr); // [1, "Dyno", 3, 4, 5]
//độn dài của mảng .length

//=========================================
/**
 * chuỗi trong js
 */

//cách tạo chuỗi
let fullN = "binhboong"; //nên dùng cách này

let newFull = new String("binhboong");
// console.log(fullN.length); /kiểm tra độ dài của chuỗi

//===============================================================

/**Array Method
 * Push
 * pop
 * slice
 * splice
 * sort
 * map
 * filter
 * find
 * inclues
 * reduce
 */

//pop
let arr = [4, 5, 6, 2, 1];

let num = arr.pop(); //[4,5,6,2,1]

//push
let numC = arr.push(0); // [4,5,6,2,1,0]

//slice

let numD = arr.slice(0, 3); //[4,5,6]

//splice

let arrrMoi = arr.splice(2, 1); //[4,5,2,1]

//sort

let newArr1 = arr.sort(function (a, b) {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a == b) {
    return 0;
  }
}); //[1,2,3,4,5,6]

//sort object

let student = [
  {
    name: "hung",
    score: 8,
  },
  {
    name: "anh",
    score: 4,
  },
  {
    name: "nam",
    score: 7,
  },
  {
    name: "van",
    score: 3,
  },
  {
    name: "binh",
    score: 10,
  },
];

//sắp xếp giảm dần
student.sort(function (item1, item2) {
  if (item1.score > item2.score) {
    return -1;
  }
  if (item1.score < item2.score) {
    return 1;
  }
  if (item1.score === item2.score) {
    return 0;
  }
});

//Map
let data = [1, 2, 3, 4, 5, 6, 7];

let newData = data.map(function (item) {
  return item * 2;
});

// mảng nhân lên 2 lần

//Filter

let data2 = [3, 4, 5, 6, 7, 8];

let newData2 = data2.filter(function (value, index) {
  return value % 2 === 0;
}); //lọc ra số chẵn

//Find
let data3 = [1, 2, 5, 6, 7, 8];

let newData3 = data3.find(function (item) {
  return item > 4;
}); //tìm ra phần tử đầu tiền lớn hơn 4 thì lập tức dừng lại luôn

//==================================================

/**
 *  ++++++++++++++String Method
 * Length
 * trim
 * indexOf
 * substring
 * replaceAll
 * toupperCase
 * charAt
 * split
 */

//length
let nameF = "pham duc binh";
console.log(nameF.length); //độ dài biến

//trim

let nameE = "   BINH    ";
console.log(nameE.trim()); //xóa khoảng trắng

//indexOf

let indexof = "binhboong";
console.log(indexof.indexOf("b")); //lấy ra vị trí của phần tử

//replaceAll
let reP = "aaaaaaaaaaaaaaaaa";

//==============================================================================

/**HTML DOM
 *
 * CÓ 3 Thành phần
 * element
 * attribute
 * text
 *
 * =------------------
 * javascript
 */

//dom event

//==========================================

/**
 * 1. Ép kiểu (Type Conversion)
 */
const num2 = 18;
const numStr = num2.toString() + " tuổi"; // typeof numStr = "string" - Explicit const str = "18"; const age = str * 1; // typeof age = "number" - Implicit

//===========================================

/**
 * 4. Tham chiếu (Pass by Reference) và Tham trị (Pass by Value)
 */
const ax = 123;
const bx = 123;
console.log(ax === bx); // true do so sánh 2 giá trị giống nhau (pass by value) const c = { x : 1 }; const d = { x : 1 }; console.log(c === d); // false do so sánh 2 địa chỉ vùng nhớ khác nhau (pass by reference)
