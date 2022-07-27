export const removeDuplicates = (nums: number[]): number => {
  // const newNums: number[] = nums.reduce(
  //   (acc: number[], value: number): number[] => {
  //     if (acc.length === 0) {
  //       acc.push(value);
  //     } else {
  //       if (acc[acc.length - 1] !== value) {
  //         acc.push(value);
  //       }
  //     }
  //     return acc;
  //   },
  //   []
  // );
  // return newNums.length;
  const hoge = nums.splice(0, nums.length, ...new Set(nums));
  console.log([...new Set(nums)]);
  return [...new Set(nums)].length;
};
