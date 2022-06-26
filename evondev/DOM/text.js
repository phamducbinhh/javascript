//1 .textContent
const snipper = document.querySelector("#snipper")
//thay đổi text-content
// snipper.textContent = "Evondev"
console.log(snipper.textContent);

//2 innerText
console.log(snipper.innerText);
//tuy nhiên textContent được sử dụng nhiều hơn vì lây được hết nội dung nằm trong html đã bị ẩn đi
//3 innerHtml
snipper.innerHTML = `<div>Hello World</div>`