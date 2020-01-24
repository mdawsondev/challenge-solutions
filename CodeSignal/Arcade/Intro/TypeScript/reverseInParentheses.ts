/** Decided to use regex and recursion for this solution. */
const reverseInParentheses = (inputString: string): string => {
  const regex = /(\([^(]*?\))/;
  const parens = /[()]/g;
  const match = inputString.match(regex);
  if (!match) return inputString;
  const word = match[0].replace(parens, "").split("");
  const rev = word.reverse().join("");
  const rep = inputString.replace(match[0], rev);

  return rep.match(parens) ? reverseInParentheses(rep) : rep;
}
