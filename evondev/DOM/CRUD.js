//crud thêm xóa sửa trong javascript
//1 tạo ra element trong javascript -> document.creatElement("tag")
const div = document.createElement("div");
//2 selector.appentchild
//document.body -> thẻ body
//document.querySelector("tag")
const body = document.querySelector("body");
body.appendChild(div);
//thêm class vào html
div.classList.add("container");
//đặt tên class là wrapper
div.className = "container wrapper";
//in ra html
div.textContent = "React Native";
//thêm class vào html
div.innerHTML = `<div class ="content">
<h3></h3></div>`;
div.setAttribute("data-name", "evondev");

// hàm appendChild trong js có công dụng là bổ sung một node vào vị trí cuối cùng bên trong một node khác
/**
 * bài tập tạo ra thẻ img và ảnh bằng js
 *     <!-- <div class="card">
        <img src="" alt="" class="card_image">
    </div> -->
 */
//tạo 1 thẻ div sau đó tạo class là card
const card = document.createElement("div");
card.classList.add("card");
body.appendChild(card);
//tạo một img trong card
const cardImage = document.createElement("img");
card.appendChild(cardImage);
//set attribute cho img
cardImage.setAttribute("src", "https://images.jpg");
cardImage.setAttribute("class", "card_img");

//document.creaTextNode
const text = document.createTextNode("my name is binh");
const h1 = document.createElement("h1");
body.appendChild(h1);
h1.appendChild(text);

//Element.cloneNode
const text2 = document.createTextNode("React Native");
const h2 = document.createElement("h2");
h2.setAttribute("class", "text_Node");
h2.appendChild(text2);
const h2Clone = h2.cloneNode(true);
body.appendChild(h2Clone);

// element.hasChildNode -> kiểm tra xem có phần tử con không nếu có trả về true còn không thì fales
console.log(document.querySelector("h3").hasChildNodes()); //false vì trong h3 không có phần tử con
