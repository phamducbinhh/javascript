//cấu trúc addEventlistener
const button = document.querySelector(".button");
const span = document.querySelector("span");
// lỗi sai khi dùng function vào event
// button.addEvenlistenter("click",handleClick) -> đúng
button.addEventListener("click", function () {
  console.log("click button");
});
//bubbling: nổi bọt
// sự kiện click chạy từ trong ra ngoài
span.addEventListener("click", function (event) {
  event.stopImmediatePropagation(); // chỉ click được vào chính nó
  console.log("click span");
});
span.addEventListener("click", function () {
  console.log("click span 2");
});
document.body.addEventListener("click", function () {
  console.log("click body");
});

//=====================================
//target và current target
button.addEventListener("click", function (event) {
  console.log("event.target", event.target);
  //event.target nó sẽ chọn chính xác element mà mình click tới
  console.log("event.currenTarget", event.currentTarget);
  //event.currentarget : nó sẽ chọn phần tử mà mình click
});

//=========================================

//event.preventdefault
const link = document.querySelector(".link");
link.addEventListener("click", function (event) {
  event.preventDefault();
  event.stopImmediatePropagation();
  // console.log("click evondev");
  //selector.style
  //event.target.style
  console.log();
});

// lấy ra custom attribute data - name
// event.target.dataset.name
const name = event.target.dataset.name;
console.log(name);
