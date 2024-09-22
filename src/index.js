
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix  === undefined) {
    arr = []
  } else {
    arr = (matrix.map((a, b) => {if (b%2 != 0) { return a.reverse()} else { return a}})).flat();
  }

  return arr;
}
