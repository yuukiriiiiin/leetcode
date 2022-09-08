export const removeElement = (nums: number[], val: number): number => {
  return nums.splice(0, nums.length, ...nums.filter((n: number) => n !== val))
    .length;
};
