function reverseParentheses(s) {
  while (s.lastIndexOf("(") > -1) {
      let a = s.lastIndexOf("("),
          b = s.indexOf(")", a)+1,
          ab = s.slice(a, b);
      s = s.replace(ab, ab.split('').reverse().join('').replace(/[^\w\s]/g, ''));
  }
  return s;
}