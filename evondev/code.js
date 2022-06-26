//Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

function convert(arr) {
  return arr.map(function(item) {
    return typeof item === 'number' ? item.toString() : item;
  });
}