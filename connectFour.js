function connectFourStart(board) {
  // Your code goes here

  // check vertical

  let columns = [];
  for (let index = 0; index < board[0].length; index++) {
    columns.push([]);
    for (let j = 0; j < board.length; j++) {
      columns[index].push(board[j][index]);
    }
  }

  let joinedCols = columns.map((col) => {
    return col.join('');
  });

  let joinedRows = board.map((row) => {
    return row.join('');
  });

  // check draw

  let winnerRow = joinedRows.map((row) => {
    if (row.match(/RRRR/)) {
      return 'R';
    } else if (row.match(/YYYY/)) {
      return 'Y';
    } else {
      return null;
    }
  });

  let winnerCol = joinedCols.map((col) => {
    if (col.match(/RRRR/)) {
      return 'R';
    } else if (col.match(/YYYY/)) {
      return 'Y';
    } else {
      return null;
    }
  });

  console.log({ columns });
  console.log({ winnerCol });

  if (winnerRow.includes('R') || winnerCol.includes('R')) {
    return 'R';
  } else if (winnerRow.includes('Y') || winnerCol.includes('Y')) {
    return 'Y';
  } else if (joinedRows.find((row) => !row.match(/-/))) return 'draw';
  else {
    return 'in progress';
  }
}

function connectFour(board) {
  // Your code goes here

  // check diagonal

  let squares = [];
  let squaresIndex = 0;
  for (let index = 0; index < board.length; index++) {
    for (let j = 0; j < board[0].length; j++) {
      if (index < 3 && j < 4) {
        squares.push([]);
        squares[squaresIndex].push(board[index][j]);
        squares[squaresIndex].push(board[index + 1][j + 1]);
        squares[squaresIndex].push(board[index + 2][j + 2]);
        squares[squaresIndex].push(board[index + 3][j + 3]);
        squaresIndex++;
      }
      if (index < 3 && j > 2) {
        squares.push([]);
        squares[squaresIndex].push(board[index][j]);
        squares[squaresIndex].push(board[index + 1][j - 1]);
        squares[squaresIndex].push(board[index + 2][j - 2]);
        squares[squaresIndex].push(board[index + 3][j - 3]);
        squaresIndex++;
      }
    }
  }

  // check vertical
  let columns = [];
  for (let index = 0; index < board[0].length; index++) {
    columns.push([]);
    for (let j = 0; j < board.length; j++) {
      columns[index].push(board[j][index]);
    }
  }

  let joinedCols = columns.map((col) => {
    return col.join('');
  });

  let joinedRows = board.map((row) => {
    return row.join('');
  });

  let joinedDiags = squares.map((square) => {
    return square.join('');
  });

  // check draw

  let winnerRow = joinedRows.map((row) => {
    if (row.match(/RRRR/)) {
      return 'R';
    } else if (row.match(/YYYY/)) {
      return 'Y';
    } else {
      return null;
    }
  });

  let winnerCol = joinedCols.map((col) => {
    if (col.match(/RRRR/)) {
      return 'R';
    } else if (col.match(/YYYY/)) {
      return 'Y';
    } else {
      return null;
    }
  });

  let winnerDiag = joinedDiags.map((diag) => {
    if (diag.match(/RRRR/)) {
      return 'R';
    } else if (diag.match(/YYYY/)) {
      return 'Y';
    } else {
      return null;
    }
  });

  if (
    winnerRow.includes('R') ||
    winnerCol.includes('R') ||
    winnerDiag.includes('R')
  ) {
    return 'R';
  } else if (
    winnerRow.includes('Y') ||
    winnerCol.includes('Y') ||
    winnerDiag.includes('Y')
  ) {
    return 'Y';
  } else if (joinedRows.find((row) => !row.match(/-/))) return 'draw';
  else {
    return 'in progress';
  }
}

// const board = [
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['-', '-', '-', 'R', 'R', 'R', 'R'],
//   ['-', '-', '-', 'Y', 'Y', 'R', 'Y'],
//   ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
//   ['-', '-', 'Y', 'Y', 'R', 'R', 'R'],
// ];

const board = [
  ['-', 'Y', '-', '-', '-', '-', '-'],
  ['-', 'Y', '-', '-', '-', '-', '-'],
  ['-', 'Y', '-', '-', 'R', 'R', 'R'],
  ['-', 'Y', '-', 'Y', 'Y', 'R', 'Y'],
  ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
  ['-', '-', 'Y', 'Y', 'R', 'R', 'R'],
];

// const board = [
//   ['R', 'R', 'R', 'R', 'R', 'R', 'R'],
//   ['R', 'R', 'R', 'R', 'R', 'R', 'R'],
//   ['R', 'R', 'R', 'R', 'R', 'R', 'R'],
//   ['R', 'R', 'R', 'Y', 'Y', 'R', 'Y'],
//   ['R', 'R', 'R', 'Y', 'R', 'Y', 'Y'],
//   ['R', 'R', 'Y', 'Y', 'R', 'R', 'R'],
// ];

connectFour(board);

// [
//   ['-', '-', '-', '-', '-', '-', '-'],
//   ['Y', '-', '-', '-', '-', '-', '-'],
//   ['-', 'Y', '-', 'R', 'R', 'R', 'R'],
//   ['-', '-', 'Y', 'Y', 'Y', 'R', 'Y'],
//   ['-', '-', '-', 'Y', 'R', 'Y', 'Y'],
//   ['-', '-', 'Y', 'Y', 'R', 'R', 'R'],
// ];

// check horizontal
// loop through each item
// join the arrays into a string
// check each string for a regex RRRRR or YYYY
// return R or Y for wins
// in progress for running
// draw if all full

// check vertical
// loop through array
// make new array of index 1, 2, 3
// join the arrays into a string
// check each string for a regex RRRRR or YYYY
// return R or Y for wins
// in progress for running
// draw if all full

// check diagonal
// pick out 4x4 square from array
// check the winning positions
// if win, stop
// if no wins, move to next square
