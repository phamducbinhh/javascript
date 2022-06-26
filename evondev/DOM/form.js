//1.keydown: khi nhấn xuống bàn phím xuống
const input = document.querySelector(".input");
input.addEventListener("keydown", function (e) {
  //   console.log(e.key);
  //   console.log(e.keyCode);
  //   console.log(e.Which);
  //e.key:key nhập vào
  //   if (e.key === "Enter") {
  //     alert("you hit enter");
  //   }else{
  //       alert(e.key)
  //   }
});

//2 keyup : sự kiện này sẽ xảy ra khi nhấn phím rồi thả ra
input.addEventListener("keyup", function (e) {
  //   console.log(e.key);
});

//3 keypress: sự kiện này xảy ra khi bạn nhấn phím

//keypress sẽ không nhận các phím như delete các phím mũi tên....
input.addEventListener("keypress", function (e) {
  //   console.log(e.key);
});
//thứ tự ưu tiên keydown -> krypress -> keyup

//4.change
input.addEventListener("change", function (e) {
  // console.log("working");
});

//5 focus nhấn vào trong
input.addEventListener("focus", function (e) {
  console.log("focus");
});

//6.blur  nhấn ra ngoài

//7 submit form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //lấy giá trị của input
  // if(input.value ===""){
  //     alert("emty")
  // }
  //   console.log(input.value);

  //cacsh2 lấy giá trị: dùng this hoặc e.target hoặc this.element
  console.log(this.elements);
  console.log(this.elements["username"].value);
});
