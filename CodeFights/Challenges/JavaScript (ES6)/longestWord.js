function longestWord(s) {
  return s.match(/\w+/g).reduce((a, b) => a.length > b.length ? a : b);
}