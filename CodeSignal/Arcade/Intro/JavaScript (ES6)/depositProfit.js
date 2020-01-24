depositProfit = (d, r, t) => {
  let y = 0;
  while (d < t) {
    d = d + (d * (.01 * r));
    y++;
  };
  return y;
}