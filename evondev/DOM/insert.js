//1 element.insertAdjacentText(poisition,text)

const h3 = document.querySelector("h3");
// h3.insertAdjacentText("poisition","text")
// poisition: beforebegin;afterbegin;beforend;afterend
h3.insertAdjacentText("beforebegin", "begin");
h3.insertAdjacentText("afterbegin", "after");

//2 Phương thức insertAdjacentElement(position,node)
//tạo thẻ bold có class là bold
const strong = document.createElement("strong");
strong.classList.add("bold");
//thêm thẻ strong vào sau thẻ span trong h3
h3.insertAdjacentElement("beforeend", strong);

//3 Phương thức insertAdjacentHTML
/**
 *<ul class = "menu">
    <li>1</li>
    <li>1</li>
    <li>1</li>
 </ul>
 */
const template = `<ul class = "menu">
<li>1</li>
<li>2</li>
<li>3</li>
</ul>`;
//chèn 1 đoạn html 
document.body.insertAdjacentHTML("beforeend",template)

