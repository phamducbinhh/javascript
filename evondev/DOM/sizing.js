//1 offsetwhit,offsetHeight,offsetLef,offsetParent ,offsetTop

const boxed = document.querySelector(".boxed");
console.log(boxed.offsetWidth); // độ rộng của phần tử
console.log(boxed.offsetHeight); // chiều cao của phần tử
console.log(boxed.offsetLeft); // khoảng cách bên trái của phần tử
console.log(boxed.offsetTop); // vị trí của nó so với phần tử phía trên
console.log(boxed.offsetParent); // lấy ra phần tử cha đẻ lấy giá tri phần tử cha

//2. clientWith
console.log(boxed.clientWidth); //độ rộng phần tử trừ đi border
console.log(boxed.clientHeight);
console.log(boxed.clientLeft);
console.log(boxed.clientTop);

//3 window
console.log(window.outerHeight);
console.log(window.innerHeight);

//4 selector.getBuondingClientRect() -> lấy ra tọa độ kích thước  của phần tử
console.log(boxed.getBoundingClientRect());
//left, x : vị trí của khối so với bên trái
//top so với phía trên
//bottom so với phía dưới
//right độ rộng của khối + top
//width: dộ rộng
//height:chiều cao

//5 sự khác nhau giữa node list và html collection
const li = document.getElementsByTagName("li"); //html collection
const li2 = document.querySelectorAll("li") //nodelist
console.log(li);
console.log(li2);

/**
 * điểm giống: có thể truy cập bằng index, có độ dài lenght,giống mảng nhưng không không sử dụng được phương thúc map filter...
 * HTML Collection: không sử dụng được forEach
 * NodeList: sự dụng được forEach
 */