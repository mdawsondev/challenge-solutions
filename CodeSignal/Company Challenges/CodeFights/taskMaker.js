// First we want to remove any of the DB entries that aren't relevant.
// Then, we clean the line and make a note of which line we're replacing.
// Finally, we remove the useless line, and return the result.

function taskMaker(source, challengeId) {
  let placeholder = null;
  return source.filter(line => {
    if (line.indexOf("//DB") === -1 || line.includes(`//DB ${challengeId}`)) return true;
  }).map((line, i, arr) => {
    if (line.includes(`//DB ${challengeId}`)) {
      placeholder = i-1;
      return line.replace(/\/\/DB \d+\/\//g, "");
    }
    return line;
  }).filter((line, i) => i !== placeholder);
}