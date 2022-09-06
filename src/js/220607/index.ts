export const isValid = (s: string): boolean => {
  // 文字数が奇数だったら false
  if (s.length % 2 !== 0) return false;

  const reverse = s.split("").reverse().join("");
  if (s === reverse) return true;


  const arr = s.match(/.{2}/g);

  if (arr === null) return false;



  return arr.every(item => (item.charAt(0) === '(' && item.charAt(1) === ')') || (item.charAt(0) === '{' && item.charAt(1) === '}') || (item.charAt(0) === '[' && item.charAt(1) === ']'));
};
