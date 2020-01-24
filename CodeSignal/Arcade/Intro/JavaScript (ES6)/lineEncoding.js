function lineEncoding(s) {
  return s.replace(/(.)\1*/g, (e, i) => i == e ? i : e.length + i)
}

// Needs to be reworked, I wasn't able to find an elegant solution. This one was submitted by user jraghon.