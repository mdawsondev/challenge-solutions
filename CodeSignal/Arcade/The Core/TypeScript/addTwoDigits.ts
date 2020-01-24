const addTwoDigits = (n: number): number => {
  const nums = n.toString().split("");
  return nums.reduce((total: number, cur: string) => total + Number(cur), 0);
}