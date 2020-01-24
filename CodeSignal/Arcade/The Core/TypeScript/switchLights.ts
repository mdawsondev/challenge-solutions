const switchLights = (a: number[]): number[] => {
  return a.reduce((candles: number[], candle: number, i: number) => {
    if (candle) {
      return candles.map((c: number, j: number) => {
        if (j <= i) return c ? 0 : 1;
        return c;
      });
    }

    return candles;
  }, a);
};
