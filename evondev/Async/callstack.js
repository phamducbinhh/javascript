//callstack is a stack of functions that are called in sequence.
function add(a, b) {
  return a + b;
}
function average(a, b) {
  return (a + b) / 2;
}

let result = average(10, 20);
console.log(result);
