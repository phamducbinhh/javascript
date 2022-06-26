// 1 parentNode, parentElement , removeChild

//parentNode vd parentElement

const span = document.querySelector("span");
console.log(span.parentNode);
console.log(span.parentElement);
//selector.parentNode hoawjc slelector.parentElement.removeChild(selector)
// span.parentNode.removeChild(span);

//2 nextElementSibling tìm tới phần tử kế tiếp vs previousELementSibling: tìm tới phần tử đứng sau nó
//a b c
const nextSpan = span.nextElementSibling;
console.log(nextSpan);
const previous = span.previousElementSibling;
console.log(previous);

//3 childNode: trả về hết các node bên trong bao gồm textNode vs children: trả về các node không bao gồm textNode
console.log(span.childNodes); //lấy cả phần text (text <strong? text) 
console.log(span.children);

//4.firstChild và fitstElementChild
console.log(span.firstChild); //text
console.log(span.firstElementChild); //<strong>

//5 lastChild và lastElementChild
console.log(span.lastChild); //text
console.log(span.lastElementChild); //<strong>