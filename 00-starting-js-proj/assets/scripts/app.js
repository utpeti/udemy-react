function combine(a, b, c) {
  return a * b / c;
}

function transformToObjects(numberArray) {
  // Todo: Add your logic
  // should return an array of objects
  const transformedNumbersIntoObjects = numberArray.map((number) => ({val: number}));
  
  return transformedNumbersIntoObjects;
}
