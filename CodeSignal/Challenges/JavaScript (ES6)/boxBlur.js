function boxBlur(img) {
  let nRow = [];
  img.forEach((row, i) => {
    if (i !== 0 && i !== img.length - 1) {
      let nPx = [];
      row.forEach((px, j) => {
        let l = row[j - 1],
          r = row[j + 1],
          u = img[i - 1][j],
          d = img[i + 1][j],
          ul = img[i - 1][j - 1],
          ur = img[i - 1][j + 1],
          dl = img[i + 1][j - 1],
          dr = img[i + 1][j + 1];
        if (j !== 0 && j !== row.length - 1) {
          nPx.push(Math.floor((px + l + r + u + d + ul + ur + dl + dr) / 9));
        };
      });
      nRow.push(nPx);
    }
  })
  return nRow;
}