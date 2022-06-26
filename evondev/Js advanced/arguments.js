// arguments.js

function number(a, b, c) {
    const args = Array.from(arguments);
    console.log(typeof arguments);
  const args2 = [...arguments];
  return a + b + c;
}
number(); //mảng các tham số


// arguments là mảng chứa các tham số truyền vào