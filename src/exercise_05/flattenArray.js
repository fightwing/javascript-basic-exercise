export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array === null || array === undefined) {
    throw new Error('Flatten undefined or null array');
  }
  if (array.length === 0) {
    return [];
  }
  let res = [];


  for (let i = 0; i < array.length; i += 1) {
    res = res.concat(array[i]);
  }
  return res;
}
