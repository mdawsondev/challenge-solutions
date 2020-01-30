// https://www.codewars.com/kata/53368a47e38700bd8300030d/train/javascript

const list = (names) => {
  const numNames = names.length;
  if (!numNames) return "";
  if (numNames === 1) return names[0].name;

  const last = names.pop();
  const lName = `& ${last.name}`;
  let str = names.map(obj => obj.name).join(", ");
  return `${str} ${lName}`;
};
