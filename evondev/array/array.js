//Mảng 

//tạo 1 mảng có 2 cách
const student1 = [1,2,3,4,5,2];
//constructor
const students = new Array();
// ví dụ một mảng
// mảng phức tạp[0, false , undefined ,null,string,["evondev","binh"]]

//mảng đơn giản [0,false,undefined,null,"string"]

//truy xuất giá trị trong mảng qua index
console.log(student1[0]);
console.log(student1[2]);
//nếu không có vị trị index thì trả về undefined
console.log(student1[student1.length-1]);//lấy phần tử cuối của mảng ,lenght của mảng -1
//[] :emty mảng rỗng

// =======================

//phương thức của mảng hay dùng
//length -> trả về độ dài của mảng
const student2 = ["a","b","c","d","g","e"]
console.log("-----.lenght-------");
console.log(student2.length);
//reverse -> đảo ngược giá trị trong mảng
console.log('reverse:',student2.reverse());
//join -> nối các phần tử trong mảng thành string
console.log('join:',student2.join());

//includes - > kiểm tra mảng đó có chứa phần tử nào đó hay không

console.log("include:",student2.includes("b"));//true

console.log("include:",student2.includes("1"));//false

//indexof -> trả về vị trí của phần tử đầu tiên

console.log("indexof:",student2.indexOf("b"));

//lastindexof -> trả về vị trí của phần tử cuối

console.log("last indexof:",student2.lastIndexOf("e"));

//push - > thêm phần tử vào cuối mảng

console.log("push:",student2.push("x"));
console.log(student2);
//unshif - > thêm phần tử vào đầu mảng

console.log("unshif:",student2.unshift("javascript"));
console.log(student2);
