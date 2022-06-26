//every kiểm tra tất cả các phần tử thuộc 1 mảng có thỏa mãn điều kiện trả về hay không
//lặp qua từng phần tử của mảng và mỗi lần lặp nó sẽ gọi lại hàm của phần tử

const courses = [
  {
    id: 1,
    name: "Nodejs",
    price: "100000",
  },
  {
    id: 2,
    name: "Reactjs",
    price: "200000",
  },
  {
    id: 3,
    name: "Angularjs",
    price: "300000",
  },
];

const isFree = courses.every((course) => {
  return course.price === "2000";
});
console.log(isFree);