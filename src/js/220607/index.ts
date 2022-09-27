export const isValid = (s: string): boolean => {
  const hash: { [key: string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  let stack: string[] = [];

  for (const char of s) {
    if (char in hash) {
      stack.push(char);
    } else {
      const top = stack.pop();
      console.log(top)
      if (top === undefined || hash[top] !== char) {
        return false;
      }
    }
  }

  return !stack.length;

};
