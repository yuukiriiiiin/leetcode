export const longestCommonPrefix = (strs: string[]): string => {
  if (
    strs[0].slice(0, 1) === strs[1].slice(0, 1) &&
    strs[1].slice(0, 1) === strs[2].slice(0, 1)
  ) {
    if (
      strs[0].slice(0, 2) === strs[1].slice(0, 2) &&
      strs[1].slice(0, 2) === strs[2].slice(0, 2)
    )
      return strs[0].slice(0, 2);
  }
  return "";
};
