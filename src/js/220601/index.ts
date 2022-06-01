export const isPalindrome = (num: number): boolean => {
  if (Math.sign(num) === -1) return false;
  const arr: string[] = [...num.toString()];
  let i: number = 0;

  while (i < arr.length) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      i = i + 1;
      if (i === arr.length) return true;
    } else {
      return false;
    }
  }
  return false;
};
