//các kiểu giá trị hay gặp
string
number
boolean
array
fucntion
null
undefined

//các chủ đề chính
-object
-array
-function
-bất đồng bộ
-kiểm soát được bất đồng bộ : -promise ,async , await
-arrray method,string method
-DOM

//sự khác nhau giữa node list và html collection
const li = document.getElementsByTagName("li"); //html collection
const li2 = document.querySelectorAll("li") //nodelist
console.log(li);
console.log(li2);

/\*\* so sánh queryselector và getbyelement

- điểm giống: có thể truy cập bằng index, có độ dài lenght,giống mảng nhưng không không sử dụng được phương thúc map filter...
- HTML Collection: không sử dụng được forEach
- NodeList: sự dụng được forEach
  \*/
