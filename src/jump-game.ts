function canJump(nums: number[]): boolean {
  let maxReach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxReach) {
      return false;
    }

    maxReach = Math.max(maxReach, i + nums[i]!);

    if (maxReach >= nums.length - 1) {
      return true;
    }
  }

  return true;
}

export { canJump };

// Example usage:
// const nums1 = [2, 3, 1, 1, 4];
// console.log(canJump(nums1));

// const nums2 = [3, 2, 1, 0, 4];
// console.log(canJump(nums2));
