//1. Đảo ngược một chuỗi. ví dụ "My name ís evondev" => "evondev is name my"

function text(str) {
  if (!str) return null;
  return str.split(" ").reverse().join(" ");
}
console.log(text("My name is evondev"));

//2 . đảo ngược 1 chuỗi bao gồm các kí tự ví dụ "i love" -> "evol i"
function reverseString(arr) {
  if (!arr) return null;
  const arrChar = arr
    .split(" ")
    .map((value) => value.split("").reverse().join(""))
    .reverse()
    .join(" "); //[ 'i', ' ', 'l', 'o', 'v', 'e' ]
  console.log(arrChar);
}
reverseString("i love");

// 3.in hoa chữ cái đầu trong chữ ví dụ: "My name is Evondev" -> "My Name Is Evondev"
