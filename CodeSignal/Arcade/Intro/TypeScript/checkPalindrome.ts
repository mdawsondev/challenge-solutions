const checkPalindrome = (input: string): boolean => {
  const inputReversed = input.split("").reverse().join("");
  return input === inputReversed;
};