function sumUpNumbers(s) {
  return s.match(/\d+/g) ? Number(s.match(/\d+/g).reduce((a,b) => +a + +b)) : 0;
}

// +var is a quick shorthand for Number(var)!