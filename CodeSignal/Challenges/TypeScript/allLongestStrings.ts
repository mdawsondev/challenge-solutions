const allLongestStrings = (arr: string[]): string[] => {
  const maxLength = arr.sort((s1: string, s2: string) => s2.length - s1.length)[0].length;
  return arr.filter((str: string) => str.length === maxLength);
}