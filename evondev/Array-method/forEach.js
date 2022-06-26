//forEach duyệt mảng

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

courses.forEach((course,index) => {  //truyền vào fucntion callback
    console.log(course);
})
