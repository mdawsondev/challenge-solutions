const minimalNumberOfCoins = (coins: number[], price: number): number => {
  const sorted = coins.sort((a, b) => b - a);
  let counter = coins.reduce((ledger: number[], coin: number) => {
    let count = 0;
    let remaining = ledger[0];
    let canRun = true;
    while (canRun) {
      if (remaining - coin >= 0) {
        remaining -= coin;
        count++;
      } else {
        canRun = false;
      }
    }
    
    return [remaining, count + ledger[1]]
  }, [price, 0]);

  return counter[1];
};

