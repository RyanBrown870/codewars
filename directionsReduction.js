function dirReduc(arr) {
  // ...
  let verticalPos = 0,
    horizontalPos = 0;

  arr.forEach((direction) => {
    if (direction === 'NORTH') {
      verticalPos++;
    }
    if (direction === 'SOUTH') {
      verticalPos--;
    }
    if (direction === 'EAST') {
      horizontalPos++;
    }
    if (direction === 'WEST') {
      horizontalPos--;
    }
  });

  console.log(verticalPos, horizontalPos);

  let simpleDirections = [];
  if (verticalPos === 0 && horizontalPos === 0) {
    return arr;
  }
  while (verticalPos !== 0 || horizontalPos !== 0) {
    let verticalDir;
    let horizontalDir;
    if (verticalPos > 0) {
      verticalDir = 'NORTH';
      simpleDirections.push(verticalDir);
      verticalPos--;
    }
    if (verticalPos < 0) {
      verticalDir = 'SOUTH';
      simpleDirections.push(verticalDir);
      verticalPos++;
    }
    if (horizontalPos > 0) {
      horizontalDir = 'EAST';
      simpleDirections.push(horizontalDir);
      horizontalPos--;
    }
    if (horizontalPos < 0) {
      horizontalDir = 'WEST';
      simpleDirections.push(horizontalDir);
      horizontalPos++;
    }
  }
  console.log(simpleDirections);
  return simpleDirections;
}

dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']);
//   ["WEST"]

// verticalPos and horizontalPos
// loop through array and increment counters
// want a function to increment counters
// North adds 1 to verticalPos, South subtracts 1
// Need logic to track route
// create new array contain number of DIRECTIONS for each positive or negative value or verticalPos/horizontalPos
