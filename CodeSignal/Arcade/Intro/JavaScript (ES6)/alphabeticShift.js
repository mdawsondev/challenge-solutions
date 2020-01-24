function alphabeticShift(str) {
  return str.split('').map((e, i) => {
    const num = str.charCodeAt(i) + 1;
    return num === 123 ? String.fromCharCode(97) : String.fromCharCode(num);
  }).join('');
}