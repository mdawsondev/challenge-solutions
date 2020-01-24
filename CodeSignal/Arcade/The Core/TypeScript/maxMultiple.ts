const maxMultiple = (divisor: number, bound: number): number => {
  let max = bound;
  while (max % divisor !== 0) {
    max -= 1;
  };

  return max;
};
