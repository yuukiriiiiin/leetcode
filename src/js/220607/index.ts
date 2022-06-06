export const isValid = (s: string) => {
  // 文字数が奇数だったら false
  if (s.length % 2 !== 0) return false;
  const arr = s.match(/.{2}/g) as string[];

  const result = [];
  for (const item of arr) {
    if (item[0] === "(") {
      result.push(item[1] === ")");
    }
    if (item[0] === "[") {
      result.push(item[1] === "]");
    }
    if (item[0] === "{") {
      result.push(item[1] === "}");
    }
  }

  return result.every((r) => r === true);
};
