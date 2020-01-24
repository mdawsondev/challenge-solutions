const checkPalindrome = (input) => {
  const inputReversed = input.split("").reverse().join("");
  return input === inputReversed;
};