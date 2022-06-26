// document.addEventListener("DomcontentLoaded")
document.addEventListener("DOMcontentLoaded", function () {
  console.log("DOMcontentLoaded");
});
// window.addEventListener("load")
window.addEventListener("load", function () {
  console.log("load");
});

//pageX, pageY,clientX,clientY
document.addEventListener("mouseove", function (e) {
  console.log(`pageY: ${e.pageY}`);
  console.log(`clientY: ${e.clientY}`);
});

//clientY: nó sẽ lấy tọa độ theo viewport
//pageY: nó sẽ lấy tọa độ của document,khi mà có scroll thì nó sẽ thay đổi
// x: chiều ngang
//y: là chiều dọc
