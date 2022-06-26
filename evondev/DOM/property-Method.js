//1.selector.getAttribute -> lấy ra giá trị của attribute selector
//attribute ->  thuộc tính : href, id , class, src ,style
const link = document.querySelector(".link");
console.log(link.getAttribute("href"));
//lấy ra giá trị của href là evonev.com

const li = document.querySelectorAll(".item");
// li.forEach((item)=>{
//     console.log(item.getAttribute("class"));
// })
//cách 2 dùng vòng lặp for mới sử dụng dc getAtribute
for (let i = 0; i < li.length; i++) {
  const item = li[i];
  console.log(item.getAttribute("class"));
}

//2.selector.settAtribute("attribute",value)
// const listLink = document.querySelectorAll("a.link");
// listLink.forEach((item) => item.setAttribute("target", "blank"));

//hoặc dùng vòng lặp for để set atttribute cho 1 notelist
const listLink = document.querySelectorAll("a.link");
for (let i = 0; i < listLink.length; i++) {
  const itemLink = listLink[i];
  itemLink.setAttribute("target", "blank");
}

//3.selector.remove("atribute") xóa atrribute của selector
const removeStyle = document.getElementById("snipper");
removeStyle.removeAttribute("style");

//4 hasAtribute("selector") kiểm tra selector đó có atribute nào hay không,nếu có nó sẽ trả về true,không có trả về false
console.log(removeStyle.hasAttribute("class")); //false vì không có
console.log(removeStyle.hasAttribute("id")); //true vì có