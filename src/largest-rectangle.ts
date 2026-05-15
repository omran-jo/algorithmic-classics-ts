function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;
  const n = heights.length;

  for (let i = 0; i <= n; i++) {
    const currentHeight = i === n ? 0 : heights[i]!;

    while (stack.length > 0) {
      const topIndex = stack[stack.length - 1];
      if (topIndex === undefined || currentHeight >= heights[topIndex]!) {
        break;
      }

      const height = heights[stack.pop()!];
      const width = stack.length === 0 ? i : i - stack[stack.length - 1]! - 1;
      maxArea = Math.max(maxArea, (height ?? 0) * width);
    }

    stack.push(i);
  }

  return maxArea;
}

export { largestRectangleArea };

// Example usage:
// const heights = [2, 1, 5, 6, 2, 3];
// const result = largestRectangleArea(heights);
// console.log(result);
