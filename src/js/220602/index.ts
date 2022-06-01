export const romanToInt = (s: string): number => {
  const strArr: string[] = [...s];
  let total: number = 0;

  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  for (const s of strArr) {
    if (s === "I") {
      total += 1;
    }
    if (s === "V") {
      total += 5;
    }
    if (s === "X") {
      total += 10;
    }
    if (s === "L") {
      total += 50;
    }
    if (s === "C") {
      total += 100;
    }
    if (s === "D") {
      total += 500;
    }
    if (s === "M") {
      total += 1000;
    }
  }
  return total;
};
