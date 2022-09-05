export const lengthOfLastWord = (s: string): number => {
  const arr = s.split(' ').filter(item => item !== '');
  return arr[arr.length - 1].length;
};
