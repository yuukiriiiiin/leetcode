export const romanToInt = (s: string): number => {
  type RomanType =
    | "I"
    | "V"
    | "X"
    | "L"
    | "C"
    | "D"
    | "M"
    | "IV"
    | "IX"
    | "XL"
    | "XC"
    | "CD"
    | "CM";
  const RomanIregularType = ["IV", "IX", "XL", "XC", "CD", "CM"] as RomanType[];
  const romanArr: RomanType[] = [];

  const str = RomanIregularType.reduce((prev, cur) => {
    if (s.includes(cur)) {
      romanArr.push(cur);
      return prev.replace(cur, "");
    }
    return prev;
  }, s);

  const newRomanArr = [...romanArr, ...str] as RomanType[];

  const conversionTable: {
    [key in RomanType]: number;
  } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  const total = newRomanArr.reduce((prev: number, cur, i) => {
    return prev + conversionTable[cur];
  }, 0);

  return total;
};
