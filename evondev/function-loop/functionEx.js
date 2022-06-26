//1. Viết function(hàm) so sánh 2 số a, b tìm ra số lớn hơn

function num(a, b) {
  return Math.max(a, b);
}
console.log("số lớn hơn là :", num(10, 20));

// function num(a = 0, b = 0) {
//   if (typeof a !== "number" || typeof b !== "number") return;
//   return Math.max(a, b);
// }
// console.log("số lớn hơn là :", num('10', 1000));

//2. in hoa chữ cái đầu trong chữ ví dụ: tuấn -> Tuấn ...

//capitalize
function text(string = "") {
  //lấy ra chữ cái in hoa đầu tiên
  //Uppercase
  let newWorld = string.toLowerCase().charAt(0).toUpperCase();
  console.log(newWorld);
  //lấy ra các chữ còn lại
  let otherText = string.toLowerCase().slice(1);
  console.log(otherText);
  //reuturn ra 2 chuỗi
  return `${newWorld}${otherText}`;
}
console.log(text("BINH"));

// 3 . viết 1 hàm có sử dụng callback (function là parameter của function khác) in ra kết quả của hàm compare in ra kết quả của hàm đó

function useCallback(a,b, callback){
  let max = num(a,b);
  callback(max);
}
function printMax(number){
  console.log("max number is " + number);
}
console.log(useCallback(500,1000,printMax));

