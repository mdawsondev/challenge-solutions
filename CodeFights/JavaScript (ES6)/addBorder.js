function addBorder(pic) {
  let a = '*'.repeat(pic[0].length+2);
  return [a, ...pic.map(e => `*${e}*`), a];
}