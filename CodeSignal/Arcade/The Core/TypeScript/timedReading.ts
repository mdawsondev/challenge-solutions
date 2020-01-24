const timedReading = (maxLength: number, text: string): number => {
  return text
    .replace(/[\W\s\']/g, " ")
    .split(" ")
    .filter((e) => e)
    .reduce((count: number, word: string) => {
      return word.length <= maxLength ? count + 1 : count;
    }, 0);
};
