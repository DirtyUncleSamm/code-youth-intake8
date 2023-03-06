function range(start, end, step) {
  // check for invalid parameters
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }

  // initialize variables
  var result = [];
  var current = start;

  // loop to generate range
  while (current <= end) {
    result.push(current);
    current += step;
  }

  return result;
}

console.log(range(0,100,3));
