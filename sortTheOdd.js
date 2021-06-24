function sortArray(array) {
  // Return a sorted array.
  let oddsArray = array.filter((number) => number % 2 !== 0);
  oddsArray.sort((a, b) => {
    return a - b;
  });

  array.forEach((element, index, array) => {
    if (element % 2 !== 0) {
      array.splice(index, 1, oddsArray[0]);
      oddsArray.shift();
    }
  });

  return array;
}

sortArray([5, 3, 2, 8, 1, 4]);

//   [1, 3, 2, 8, 5, 4]

// filter out odd numbers
// sort the odd numbers
// substitute the sorted odds for only the odd numbers
