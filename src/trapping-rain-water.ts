function trap(heights: number[]): number {
  if (heights.length < 3) {
    return 0;
  }

  let left = 0;
  let right = heights.length - 1;
  let maxLeft = heights[left]!;
  let maxRight = heights[right]!;
  let waterTrapped = 0;

  while (left < right) {
    if (maxLeft < maxRight) {
      left++;
      maxLeft = Math.max(maxLeft, heights[left]!);
      waterTrapped += maxLeft - heights[left]!;
    } else {
      right--;
      maxRight = Math.max(maxRight, heights[right]!);
      waterTrapped += maxRight - heights[right]!;
    }
  }

  return waterTrapped;
}

export { trap };

// Example usage:
// const heights = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
// const result = trap(heights);
// console.log(result);
