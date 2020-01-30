// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

const validParentheses = (parens) => {
  let valid = true;
  const out = parens.split("").reduce((pre, cur) => {
    if (pre < 0) valid = false;
    return cur === "(" ? pre + 1 : pre - 1;
  }, 0);
  return valid && out === 0;
};
