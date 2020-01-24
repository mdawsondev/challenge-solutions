function minesweeper(matrix) {
  let game = matrix.map(row => {
    return row.map(value => {
      return value ? 'x' : 0;
    });
  });

  game.forEach((row, i) => {
    row.forEach((value, j) => {
      if (typeof value === 'string') {
        if (i !== 0) game[i - 1][j] += 1; //top
        if (i !== game.length - 1) game[i + 1][j] += 1; //bottom

        if (j !== 0) row[j - 1] += 1; //left
        if (j !== row.length - 1) row[j + 1] += 1 //right

        if (i !== 0 && j !== 0) game[i - 1][j - 1] += 1; //tl
        if (i !== game.length - 1 && j !== 0) game[i + 1][j - 1] += 1; //bl

        if (i !== game.length - 1 && j !== row.length - 1) game[i + 1][j + 1] += 1; //br
        if (i !== 0 && j !== row.length - 1) game[i - 1][j + 1] += 1; //tr
      }
    });
  })

  game.forEach(row => {
    row.forEach((value, i) => {
      if (typeof value === 'string') {
        row[i] = value.length - 1;
      }
    });
  });

  return game;
}