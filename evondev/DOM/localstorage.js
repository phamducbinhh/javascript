//localStorage.setItem("key","value")
localStorage.setItem("name", "evondev");

//2.localStorage.getItem("key")
console.log(localStorage.getItem("name"));

//3 localstorage.removeItem("key")
// localStorage.removeItem("name")

//4.localstorage.clear()

// ví dụ
let arr = [1, 2, 3, 4, 5];
localStorage.setItem("list", JSON.stringify(arr));

const newArr = JSON.parse(localStorage.getItem("list"));
console.log(typeof newArr);
