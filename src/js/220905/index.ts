export const searchInsert = (nums:number[], target:number): number => {
  if(nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    return [...nums, target].sort((a , b) => (a - b)).indexOf(target);
  }
};
