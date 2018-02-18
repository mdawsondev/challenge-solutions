adjacentElementsProduct = iA => {
  let out = -1000;
  iA.forEach( (e, i) => {
      let x = e * iA[i+1];
      if (x > out) out = x;
  });
  return out;
}