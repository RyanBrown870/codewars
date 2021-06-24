function wave(str) {
  // Code here
  let lettersArray = str.split('');
  let result = lettersArray.map((letter, index, array) => {
    if (letter.match(/[a-z]/)) {
      let transformedLetter = letter.toUpperCase();
      let splitLetters = str.split('');
      splitLetters.splice(index, 1, transformedLetter);
      return splitLetters.join('');
    } else {
      return null;
    }
  });

  let filteredResult = result.filter((item) => item !== null);
  return filteredResult;
}

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
wave('hello');
console.log(wave('hello world'));

// split the letter
// loop through letters array and check if each item is a lower case letter
// If it is, make it uppercase
// Use the index of the letter to splice the transformed letter in.
// Push new word into array / return the new word

// 1.  The input string will always be lower case but maybe empty.

// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat
