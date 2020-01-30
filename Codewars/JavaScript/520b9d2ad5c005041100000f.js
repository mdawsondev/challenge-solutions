// https://www.codewars.com/kata/520b9d2ad5c005041100000f/

const pigIt = (str) => {
  const words = str.split(" ");
  const pigArr = words.map(word => {
    const first = word.substr(0, 1)
    return first.match(/\W/)
      ? word
      : `${word.substr(1)}${first}ay`
    });
  return pigArr.join(" ");
}