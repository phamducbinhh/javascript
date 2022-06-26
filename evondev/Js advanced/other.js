// sự khác nhau giữa i++ và ++i

let i = 1;
let j = i++; //tăng sau khi lấy giá trị
// console.log(i, j);

let a = 1;
let b = ++a; // tăng trước khi lấy giá trị

// console.log(a, b);

// lưu ý khi return function

function total(x, y) {
  return; //undefined
  x + y;
}

// cách chuyển đổi dữ liệu

const str = "123";
const num = Number(str);
//cách 2
const num2 = parseInt(str);
//cách 3
const num3 = parseFloat(str);
//cách 4
const num4 = +str;
console.log(!!str);

//những trường hợp không nên sử dụng arrow  fucntion
