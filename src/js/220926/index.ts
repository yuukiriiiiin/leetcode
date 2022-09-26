
export const merge = (nums1: number[], m: number, nums2: number[], n: number): number[] => {
  nums1.splice(m, nums1.length);
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i]);
  }
  nums1.sort((a, b) => (a < b ? -1 : 1));
  return nums1
};