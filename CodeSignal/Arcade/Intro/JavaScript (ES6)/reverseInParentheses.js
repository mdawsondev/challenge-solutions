/** Decided to use regex and recursion for this solution. */
const reverseInParentheses = (inputString) => {
  const regex = /(\([^(]*?\))/;
  const parens = /[()]/g;
  const match = inputString.match(regex);
  if (!match) return inputString;
  const word = match[0].replace(parens, "").split("");
  const rev = word.reverse().join("");
  const rep = inputString.replace(match[0], rev);

  return rep.match(parens) ? reverseInParentheses(rep) : rep;
}

/** This is the previous version. */
// function reverseInParentheses(s) {
//   while (s.lastIndexOf("(") > -1) {
//       let a = s.lastIndexOf("("),
//           b = s.indexOf(")", a)+1,
//           ab = s.slice(a, b);
//       s = s.replace(ab, ab.split('').reverse().join('').replace(/[^\w\s]/g, ''));
//   }
//   return s;
// }