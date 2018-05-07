function differentSymbolsNaive(s) {
  let c = [];
  s.split('').filter(e => {
    return c.indexOf(e) < 0 ? c.push(e) : '';
  });
  return c.length;
}