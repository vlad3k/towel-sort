
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
    return matrix.slice().reduce((acc, arr, index) =>
      index % 2 === 0 ?
      acc.concat(arr.sort((a, b) => a - b)) :
      acc.concat(arr.sort((a, b) => b - a)), []);
}
