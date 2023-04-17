
// Use the following snippet to test your code before submitting
export const runner = () => {
  const array = [1, 2, 3, 4, 5];
  console.log(sumArray(array));
  console.log(productArray(array));
  console.log(maxArray(array));
  console.log(minArray(array));

};

/*
  Exercise 1/5
  Use array.reduce to return the sum of all the numbers in the array
  The function should return 0 if the array is empty 
*/
export const sumArray = array => {
  const sum = array.reduce((a, b) => a + b, 0);
  return sum; // expected output is 15
}


/* 
  Exercise 2/5
  Use array.reduce to return the product of all the numbers in the array
  The function should return 1 if the array is empty 
*/
export function productArray(array) {
  const product = array.reduce((a, b) => a * b, 1);
  return product;
}

/* 
  Exercise 3/5
  Use array.reduce to return the largest number in the array
  The function should return -Infinity if the array is empty
*/
export function maxArray(array) {
  return array.reduce((a, b) => Math.max(a, b), -Infinity);
}

/*
  Exercise 4/5
  Use array.reduce to return the smallest number in the array
  The function should return Infinity if the array is empty
*/
export function minArray(array) {
  return array.reduce((a, b) => Math.min(a, b), Infinity);
}

/* 
  Exercise 5/5
  Use array.reduce to return the average of all the numbers in the array
  The function should return 0 if the array is empty
*/
export function averageArray(array) {
  return array.reduce((a, b) => a + b / array.length, 0);
}

