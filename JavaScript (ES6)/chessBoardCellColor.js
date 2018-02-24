function chessBoardCellColor(c1, c2) {
  let a = c1 + ''.split(''),
    b = c2 + ''.split('');
  return ((parseInt(a[0].charCodeAt(0) - 64) + parseInt(a[1])) % 2) === ((parseInt(b[0].charCodeAt(0) - 64) + parseInt(b[1])) % 2)
}