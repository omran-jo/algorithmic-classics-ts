import { largestRectangleArea } from './largest-rectangle.js';

function maximalRectangle(matrix: number[][]): number {
  if (matrix.length === 0 || matrix[0]?.length === 0) {
    return 0;
  }

  const cols = matrix[0]!.length;
  const heights = new Array(cols).fill(0);
  let maxArea = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row]![col] === 1) {
        heights[col]! += 1;
      } else {
        heights[col] = 0;
      }
    }

    const currentArea = largestRectangleArea(heights);
    maxArea = Math.max(maxArea, currentArea);
  }

  return maxArea;
}

export { maximalRectangle };

// Example usage:
// const matrix = [
//   [1, 0, 1, 0, 0],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 1, 1],
//   [1, 0, 0, 1, 0]
// ];
// const result = maximalRectangle(matrix);
// console.log(result);

