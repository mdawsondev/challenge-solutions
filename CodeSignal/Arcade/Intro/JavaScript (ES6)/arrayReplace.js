function arrayReplace(arr, a, b) {
  return arr.map(e => { return e === a ? b : e });
}