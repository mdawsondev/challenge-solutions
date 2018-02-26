function fileNaming(arr) {
  let out = new Set();
  arr.forEach(e => {
      if (out.has(e)) {
          let i = 1,
              f = e;
          while (out.has(e)) {
              e = `${f}(${i++})`;
          }
      }
      out.add(e);
  });
  return [...out];
}