//1 viết 1 function kiểm tra value có phải là 1 object hay không
function isObject(value){
    if(typeof value === "object" && !Array.isArray(value) && value !== null){
        return true
    }
    return false
}
console.log(isObject({}));

//2.{a:1,b:2} kết quả mong muốn -> [["a",1],["b",2]]
function objectToArray(object){
    //check nếu không phải object thì dừng
    // if(isObject(object)) return;
    // // nếu là object  thì xử lý
    // return Object.entries(object);
    //[a,b]
    const value = Object.keys(object).map(key =>[key,object[key]])
    return value
}
console.log(objectToArray({a:1, b:2}));