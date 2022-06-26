//includes method tìm kiếm phần tử trong mảng

//trả về true false
const title = "My Title";
console.log(title.includes("a"));

const cars = ["Rolls-Royce", "Mercedes", "Lexus", "BMW", "Audi"];

function checkCar(cars){
    return cars.includes("Mercedes",2);
}
console.log(checkCar(cars));