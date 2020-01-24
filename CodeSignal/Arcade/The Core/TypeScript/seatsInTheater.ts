const seatsInTheater = (nCols: number, nRows: number, col: number, row: number): number => {
  const total = nCols * nRows;
  const excludeRows = nCols * row;
  const excludeCols = nRows * (col - 1);
  const doubleCounted = row * (col - 1);
  const exclude = excludeRows + excludeCols - doubleCounted;
  return total - exclude;
}
