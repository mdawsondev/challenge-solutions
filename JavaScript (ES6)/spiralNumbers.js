function spiralNumbers(n) {
  let a = [new Array(n)],
    b = [];
  for (let i = 0; i < n - 1; i++) a.push(a[0].map(e => e)); // Create blank matrix.

  let row = col = i = change = 0,
    m = n,
    forward = true;
  while (i++ < (n * n)) {
    a[row][col] = i;
    if (forward) {
      col === m - 1 ? row++ : col++;
      row === m ? (col-- , row-- , forward = false) : ''
    } else {
      col === 0 + change ? row-- : col--;
      row === 0 + change ? (col++ , row++ , change++ , m-- , forward = true) : '';
    }
  }
  return a;
}