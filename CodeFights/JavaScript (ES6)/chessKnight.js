function chessKnight(p) {
  const a = [[0, 0, 0, 0, 0, 0, 0, 0]]; // Create first row.
  for (let i = 0; i < 7; i++) a.push(a[0].map(e => e)); // Turn into empty board.

  a.forEach((e, row, aO) => { // Calculate row possibilities.
    let rTotal = 0;
    if ([0, 7].includes(row)) rTotal++;
    if ([6, 1].includes(row)) rTotal += 2;
    if ([2, 3, 4, 5].includes(row)) rTotal += 4;
    e.forEach((f, col, eO) => { // Calculate column possibilities.
      let cTotal = 0;
      if ([0, 7].includes(col)) cTotal++;
      if ([6, 1].includes(col)) cTotal += 2;
      if ([2, 3, 4, 5].includes(col))[0, 7].includes(row) ? cTotal += 3 : cTotal += 4; // Account for first/last in col.
      if ([2, 3, 4, 5].includes(row) && [0, 7].includes(col)) cTotal = 0; // Account for first/last in row.
      aO[row][col] = (cTotal + rTotal); // Push the total possibilities for each location to the array.
    });
  });

  const pa = 'abcdefgh'.indexOf(p[0]), // Get row.
    pb = Number(p[1] - 1); // Get column.

  return a[pa][pb]; // Return the total moves.
}