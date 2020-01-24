const isSubstitutionCipher = (s1: string, s2: string): boolean => {
  const map1 = new Map();
  const map2 = new Map();
  const a1 = s1.split("");
  const a2 = s2.split("");

  let good = true;

  a1.forEach((s: string, i: number) => {
    const test = map1.get(s);
    if (test && test !== a2[i]) good = false;
    map1.set(s, a2[i])
  });

  a2.forEach((s: string, i: number) => {
    const test = map2.get(s);
    if (test && test !== a1[i]) good = false;
    map2.set(s, a1[i])
  });

  return good;
}