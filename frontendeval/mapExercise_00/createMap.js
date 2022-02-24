/*
Prompt
map is a function on the JavaScipt Array prototype that can be provided a callback, which will be called for every element in the array - 
the return value will be a new array containing the original elements after they have been passed through the callback.

For example:

function double(x) {
  return x * 2;
}

const myArray = [1, 2, 3, 4, 5];
const mappedArray = myArray.map(double);
console.log(mappedArray);
// [2, 4, 6, 8, 10];
You should implement your own version of map, which can be passed an array and a callback, and will return a new mapped array array with the callback run against every element. For example:

function map(array, callback) {
  // add your code here
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
// [2, 4, 6, 8, 10];
To get started, fork one of the following Codepen templates:
*/

function map(array, callback) {
  let newArr = [];
  for (let val of array) {
    newArr.push(callback(val));
  }
  return newArr;
}

const mappedArray = map([1, 2, 3, 4, 5], (x) => x * 2);
console.log(mappedArray);
