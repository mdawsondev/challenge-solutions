// This code doesn't output the correct answer (yet) due to the RegExp
// replacing one variable and then identifying the same variable when
// replacing the second variable. This could likely be fixed by ignoring
// the index location of the first replacement. I'm just archiving it
// so I don't lose the progress when I pick the challenge up again later.

function plagiarismCheck(code1, code2) {
  const regexp = /(?<=\().+(?=\))/gi;
  const c1vars = String(code1[0].replace(/ /g, '').match(regexp)).split(',');
  const c2vars = String(code2[0].replace(/ /g, '').match(regexp)).split(',');

  return code1.map(line => {
    let swapped = line;
    c1vars.forEach((e, i) => {
      const swap = new RegExp('(?<=\\W)' + e + '(?=\\W)', 'g');
      swapped = swapped.replace(swap, c2vars[i]);
    });
    console.log(line, swapped)
    return swapped;
  }).every((e, i) => e === code2[i]);
}