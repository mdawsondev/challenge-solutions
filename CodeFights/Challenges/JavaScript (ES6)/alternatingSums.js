function alternatingSums(a) {
  let b = c = 0;
  a.forEach((e, i) => { i%2 === 0 ? b+=e : c+=e });
  return [b, c];
}