function validTime(t) {
  return t.match(/([0-1][0-9]|2[0-3]):[0-5][0-9]/) ? 1 : 0;
}