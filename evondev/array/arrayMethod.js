//*******slice
//tạo ra một mảng copy của mảng ban đầu
const animal = ["tiger", "lion", "snake", "puma"];
//slice -> tạo ra mảng mới y hệt mảng ban đầu
const animal2 = animal.slice();
console.log("animal2", animal2);

//slice(start).start -> vị trí index ở trong mảng từ 0
const animal3 = animal.slice(1);
//sao chép ở  vị trí số 1 -> [ 'lion', 'snake', 'puma' ]
console.log(animal3);
//slice(start,end)
// nó sẽ sao chép từ phần tử start tới phần tử end -1
const animal4 = animal.slice(1, 3);
console.log("animal4", animal4);
//======================================

//*******splice:
//nó sẽ xóa phần tử trong mảng hoặc thay thế phần tử trong mảng
const car = ["bmw", "toyota", "mazda", "mercedes", "audi"];
//splice (start)
// const car2 = car.splice(2)
// console.log("car2",car2);
//splice(start,deleteCount):deletecount là số luowngj phần tử muốn xóa hoặc thay thế
const car3 = car.splice(0, 3);
console.log("car3", car);
