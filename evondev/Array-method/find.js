//find tìm kiếm phần tử trong mảng có giá trị được cung cấp

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
    price: "1",
  },
];


const course = courses.find((course) => {
    return course.name === "Nodejs";
})
console.log(course);