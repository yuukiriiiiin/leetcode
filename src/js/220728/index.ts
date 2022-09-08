export const removeElement = (nums: number[], val: number): number => {
  // return nums.splice(0, nums.length, ...nums.filter((n: number) => n !== val)).length;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) { nums.splice(i, 1); i-- }
  }

  return nums.length
};
