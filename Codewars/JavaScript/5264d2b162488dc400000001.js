// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

const spinWords = (words) => words.replace(/(\w{5,})/g, (w) => w.split("").reverse().join(""));