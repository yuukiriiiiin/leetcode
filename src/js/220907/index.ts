export const plusOne = (digits: number[]): number[] => {
  const hoge = digits.join('');
  const foo = parseInt(hoge, 10);
  const foo1 = foo + 1
  return [...foo1.toString()].map(s => Number(s));
};
