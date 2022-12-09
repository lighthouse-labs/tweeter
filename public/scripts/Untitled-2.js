
const transpose = function(array) {
  let result = [];

  for (let c = 0; c  < array[0].length; c++) {
    let temp = [];

    for (let r = 0; r < array.length; r++) {
      if (array[r][c]) {
        temp.push(array[r][c]);
      }
    }
    result.push(temp);
  }
  return result;
};

// Do not edit this function.
const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

printMatrix(
  transpose([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])
);

console.log("----");

printMatrix(
  transpose([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);

console.log("----");

printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]));