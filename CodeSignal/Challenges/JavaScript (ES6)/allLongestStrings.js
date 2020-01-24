const allLongestStrings = (arr) => {
  const maxLength = arr.sort((s1, s2) => s2.length - s1.length)[0].length;
  return arr.filter((str) => str.length === maxLength);
}