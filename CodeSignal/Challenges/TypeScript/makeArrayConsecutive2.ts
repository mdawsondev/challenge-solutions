const makeArrayConsecutive2 = (statues: number[]): number => {
  const sorted = statues.sort((n1: number, n2: number) => n1 - n2);
  return sorted.reduce((totalMissing, cur, i) => {
      const next = statues[i+1] || null;
      const expected = cur + 1;
      const different = next && next !== expected || false;
      if (different) {
        const curMissing = next - expected;
        return totalMissing + curMissing;
      }
      return totalMissing;
    }, 0);
}