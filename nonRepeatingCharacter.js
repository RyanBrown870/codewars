// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

function firstNonRepeatingLetter(s) {
  // Add your code here
  let uniqueLetter = s.split('').find((item, index, array) => {
    let filteredArray = array.filter(
      (letter) => letter.toLowerCase() === item.toLowerCase()
    );
    return filteredArray.length === 1 ? true : false;
  });
  return uniqueLetter ? uniqueLetter : '';
}

firstNonRepeatingLetter('streSS');

// need to check each letter against every other letter for repeats
// split the letters into new array
// map over and check if item is equal to any other character in array (therefore slice it?)
// if repeats, then move to next letter in order
// if no repeating letters then return the non-repeating letter
