//string (chuỗi);

"hello word";
"hello word";

//dùng cả nháy đơn và kép

//doubles quotes

const name = "binh";
// console.log(name);

const newStr = "my name is binh";
// console.log(newStr);

//.length in ra độ dài
// console.log(newStr.length);

//index là vị trí của từng kí tự chuỗi bao gồm cả khoảng trắng

//split

const myStr = "frontEnd Designer";
console.log(myStr.split(" "));

// -tolowerCase  => viết chữ thường
// -toUpperCase  => viết in hoa

//startsWith và endwisth
console.log(myStr.startsWith("frontEnd"));

console.log(myStr.includes("End"));

// //indexof
console.log(myStr.indexOf("E"));

//replace

console.log(myStr.replace("frontEnd", "binhboong"));

//repeat
console.log(myStr.repeat(5));

//slice
//  "frontEnd Designer";
console.log(myStr.slice(0, 2));

//trim
console.log(myStr.trim()); //loại bỏ khoảng trống

const myname = "backend";
//charAt
console.log(myname.charAt(0));

//substr => lấy ra 1 phần của chuỗi (string)
//substr(index,lenght) => index là vị trí , lenght là số lượng muống lấy
console.log(myname.substr(1, 5));
//substring  => lấy ra các ký tự của chuỗi (string)
console.log(myname.substring(1, 5));

const myname3 = "  frontend design S    ";
// loại bỏ khoảng trống 2 bên , đưa tất cả về in hoa thay chữ front end thành chữ digital sau đó repeat 2 lần

console.log(
  myname3.trim().replace("frontend", "digital").toUpperCase().repeat(2)
);
