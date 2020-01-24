const adjacentElementsProduct = (input: number[]): number => {
  return input.reduce((curMax: number, curNum: number, i: number) => {
    const nextNum = input[i+1] || null;
    const nextProd = nextNum ? curNum * nextNum : curMax;
    return Math.max(curMax, nextProd);
  }, -Infinity);
};