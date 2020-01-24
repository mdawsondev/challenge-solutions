const addBorder = (picture: string[]): string[] => {
  const border = [...picture];
  const length = picture[0].length;
  const frame = "*".repeat(length);
  border.unshift(frame);
  border.push(frame);
  return border.map((val: string) => val.replace(val, `*${val}*`));
};
