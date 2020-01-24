const weakNumbers = (n: number): number[] => {
  /** Create an array with placeholders for setting the weakensses. */
  const divisors = new Array(n).fill(0, 0, n);
  /** Set our default weakness to zero. */
  let weakness = 0;

  /** Iterate through each number and count their number of divisors. */
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i%j === 0) {
        divisors[i - 1] += 1;
      };
    };
  };

  /** Collect our number of weakness matches and keep track of our weakest weakness;
   * then, pass that data to a reduction and count the number of matches we have.
   */
  const matches = divisors.map((n1: number, i) => {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (n1 < divisors[j]) count++;
    }
    if (count > weakness) weakness = count;
    return count;
  }).reduce((total, n: number) => n === weakness ? total + 1 : total, 0);

  /** Finally, return an array with our answers. */
  return [weakness, matches];
};
