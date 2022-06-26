//1 selector.classlist.add
//thêm class vào 1 class đang có
const container = document.querySelector(".container");
container.classList.add("is-active")

//2 selector.classlit.remove("abc")
container.classList.remove("container")

//3 selector.classlit.containts("class") kiểm tra xem có chứa class này ko
console.log(container.classList.contains("container"));//false vì không có

//4 selector.classlist.toggle("") toggle là nếu chưa có sẽ thêm vào hoặc nếu có rồi thì sẽ removes
container.classList.toggle("is-active")

//5 selector.classname -> trả ra chuỗi các class cúa selector
const title = document.querySelector(".title")
console.log(title.className);
title.className = "title"
console.log(title);