function messageFromBinaryCode(s) {
  let x = '';
  s = s.split('');
  while (s.length > 0) {
      let a = s.splice(0, 8);
      x += String.fromCharCode(parseInt(`${a.join('')}`, 2));
  }
  return x;
}