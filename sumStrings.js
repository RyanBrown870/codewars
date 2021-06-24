function sumStrings(a, b) {
  if (!a) {
    return b;
  }

  if (!b) {
    return a;
  }

  if (a.length > 20 || b.length > 20) {
    let aOne = a.slice(0, a.length / 2);
    let aTwo = a.slice(a.length / 2, a.length);

    let bOne = a.slice(0, a.length / 2);
    let bTwo = a.slice(a.length / 2, a.length);

    aOne = parseInt(aOne);
    aTwo = parseInt(aTwo);
    bOne = parseInt(bTwo);
    bTwo = parseInt(bTwo);

    let c = aOne + bOne;
    let d = aTwo + bTwo;

    cString = c.toString();
    dString = d.toString();
    return c + d;
  }

  a = parseInt(a);
  b = parseInt(b);

  let c = a + b;

  return c.toString();
}

console.log(
  sumStrings(
    '12323424524524542524425245245',
    '456245245245245245245245245245245'
  )
);

// '579'

// convert them to numbers
// sum them

// split the strings
// loop over one, use index to grab correct one from other
// add them
