function convertFrac(lst) {
  //Your code here
  if (lst.length < 1) {
    return '';
  }
  let originalDenomArray = lst.map((item) => item[1]);

  let sortedDenomArray = originalDenomArray.sort((a, b) => {
    return b - a;
  });

  let largestDenominator = sortedDenomArray[0];
  let counter = 1;
  let largestDenomMultiples = [];
  while (counter < 1000) {
    largestDenomMultiples.push(largestDenominator * counter);
    counter++;
  }
  sortedDenomArray.shift();

  let commonDenom = largestDenomMultiples.find((denomMultiple) => {
    let matchArray = sortedDenomArray.filter(
      (numerator) => denomMultiple % numerator === 0
    );
    if (matchArray.length === sortedDenomArray.length) {
      return true;
    }
  });

  let conversionFactors = lst.map((frac) => {
    return frac[0] / frac[1];
  });

  let newNumeratorArray = conversionFactors.map((num) =>
    Math.round(commonDenom * num)
  );

  let resultString = '';
  newNumeratorArray.forEach((item) => {
    resultString += `(${item},${commonDenom})`;
  });
  return resultString;
}

convertFrac([
  [1, 2],
  [1, 3],
  [1, 4],
]);

convertFrac([
  [1, 100],
  [3, 1000],
  [1, 2500],
  [1, 20000],
]);

convertFrac([]);

// ('(6,12)(4,12)(3,12)');

// need to store lst.length
// need to make array of numerators and denominators
// find biggest denominator
// create array of multiples of largest denominator up to 100 or 50
// loop through array and:
// check to see if other denominators have a remainder from this multiple
// if not, select this denominator as common denominator
// Make new fractions
// divide original fractions to get conversion factor for each item
// multiply common denominator by conversion factors to get new fraction
// create string to include () and interpolate the resulting fractions
