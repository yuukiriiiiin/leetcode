export const twoSum = (nums: number[], target: number): number[] => {
  let answer: number[] = [];
  for (const i in nums) {
    for (const j in nums) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          answer.push(parseInt(i, 10), parseInt(j, 10));
        }
      }
    }
  }
  return answer;
};

// export const selectNum = (nums: number[], target: number): number[] => {
//   const newNums = nums.filter((n) => n > target) as number[];
//   console.log(newNums);
//   return newNums;
// };
