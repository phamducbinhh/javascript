"4.5" //4.5 parsseFloat
"4" //4 parseInt

//number(value) -> number

console.log(Number("4.5"));  //chuyển string sang dạng number

//NaN : not a number
console.log(Number(undefined)); //nan
console.log(Number(null)); //0
console.log(Number(false)); //0
console.log(Number(true)); //1
console.log(Number("")); //0
//falsy values
console.log(Number(NaN)); //NaN
//falsy values

//string(values) -> string
console.log(String(4.5)); //"4.5"
console.log(String(null)); // 'null'
console.log(String(undefined)); // 'undefined'
console.log(String(NaN)); //"NaN"
console.log(String(false)); //"false"
console.log(String(true)); //"true"


//boolean -> true or false
console.log('boolean of zero :'+ Boolean(0)); //false
console.log('boolean of "" :'+ Boolean("")); //false
console.log('boolean of null :'+ Boolean(null)); //false
console.log('boolean of undefined :'+ Boolean(undefined)); //false
console.log('boolean of NaN :'+ Boolean(NaN)); //false
console.log('boolean of false :'+ Boolean(false)); //false
console.log('boolean of text :'+ Boolean("binhboong")); //true


//tyoe coercion
// + - * //
console.log(1+2); //3
console.log(1+"2");//12

console.log('10' + 10); //1010
//10 -> "10" + "10" -> "1010"
//console.log(string(10) + "10")

console.log("10" - 10); //0  number("10") -10 = 0

console.log(null + ""); //"null"
console.log(null + undefined); //NaN
console.log("" -1); //number("") -> 0 => 0-1 =-1

console.log(false -true); //false = 0 - true =1 => =-1

console.log(null +10); //10


// =======================

//toán tử so sánh 

console.log(4>7); //false
console.log(8>7); //true
console.log(7>=7); //true

//toán tử logic cơ bản && || !
console.log(5>7 && 8>3); //false vì cả 2 vế phải đúng
console.log(5>7 || 8>3); //true vì chỉ cần 1 vế phải đúng

const sai = false;
console.log(!sai); //phủ định ngược lại là true


//= loose equality vs === strict equality
console.log('== vs ===',10 == '10'); //true
console.log(10==10);
console.log(true ==1); //true
console.log(null ==""); //"null" != "" -> false

console.log('10' === "10");//true
console.log(10 === "10");//false
console.log(10!=="10");//true
console.log(true =="true");//false
// =>>> khuyến khích dùng ===



