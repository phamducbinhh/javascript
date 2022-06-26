//Arrow Function : anonymous function
//ECMAScript

//nomar function : anonymous function
const square = function(x){
    return x*x;
}
square(5);

//còn đây là arrow function
const squared = () => {
    //if else
    return 1000;
}
// rút gọn khi return
const square2 = () => 1000; //tức là rerturn 1000

//arrow funtion khi xử lý nhiều dòng
/**
 * let square = () => {
    handle code and return
}
 */

// Arrow Function sử dụng kí tự =>

hello = () => {
console.log('hello')
}
// hello()

// còn Function thông thường thì :

function hello(){
console.log('hello')
}
// hello()