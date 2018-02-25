function isBeautifulString(inputString) {
  let clean = inputString.split('').sort();
  if (clean[0] !== 'a') return false;
  let d = 97,
      x = 0,
      y = Infinity,
      out = false;
  clean.forEach((e, i, a) => {
      if (x > y) return;
      if (a[a.length-1] === 'a') out = true;
      if ((e.charCodeAt() === d+1 || (e.charCodeAt() === d && x < y)) && i === a.length-1) out = true;
      if (e.charCodeAt() === d) { x++; return };
      if (e.charCodeAt() === d+1) { y = x; x = 1; d++; return; };
  });
  return out;
}