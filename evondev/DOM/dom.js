//1.Dom là gì
//document object
//DOM attrible
//Dom node

//2 selecting node
//2.1 document.queryselector -> trả về 1 node nếu tồn tại selector đó và ngược lại trả về null
//slector: .header, p ,body
const singleNode = document.querySelector("h1");
const singleNode2 = document.querySelector(".container");
const singleNode3 = document.querySelector("#snipper");
console.log(singleNode2);
console.log(singleNode3);

//2.2 document.queryselectorAll("selector") -> nó sẽ trả về 1 nodelist chứa danh sách các node, nếu không có thì trả về empty

// nó có thể loop và sử dụng forEach
// nó giống array nó có thể loop nhưng không sử dụng được các phương thức như push,pop,shift
const miltiNode = document.querySelectorAll(".item");
// console.log(miltiNode);

// 2.3 document.getElementsByClassName("className") -> trả về một HTMLCollection chứa danh sách các node nếu không có thì trả về empty
const classNode = document.getElementsByClassName("item");
console.log(classNode);

//2.4 document.getElementsByTagName("tagName")
const tagNode = document.getElementsByTagName("h1");
console.log(tagNode);

//2.5 document.getElementById("idName") -> trả về 1 node nếu không có sẽ là null
const idNode = document.getElementById("snipper");
console.log(idNode);

//*note lại cách hay dùng nhất là document.queryselector() và document.querySelectorAll()
