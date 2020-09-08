export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  const myarray = [];
  if (start < end) {
    for (let s = start; s < end; s += 1) {
      myarray.push(s);
    }
  }
  if (start > end) {
    for (let s = start; s > end; s -= 1) {
      myarray.push(s);
    }
  }
  return myarray;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let num = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    num += numbers[i];
  }
  return num;
}
