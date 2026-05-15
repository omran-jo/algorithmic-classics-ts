# Algorithmic Classics: TypeScript Solutions

A professional collection of TypeScript solutions for 7 classic algorithmic problems. Each solution is optimized for clarity, efficiency, and correctness, featuring minimal yet intelligent comments and comprehensive documentation.

## 📋 Problems Summary

| # | Problem | Algorithm | Time Complexity | Space Complexity | File |
|---|---------|-----------|-----------------|------------------|------|
| 1 | Flood Fill | Depth-First Search (DFS) | O(m × n) | O(m × n) | `src/flood-fill.ts` |
| 2 | Trapping Rain Water | Two-Pointer Technique | O(n) | O(1) | `src/trapping-rain-water.ts` |
| 3 | Climbing Stairs | Dynamic Programming | O(n) | O(1) | `src/climbing-stairs.ts` |
| 4 | Jump Game | Greedy Algorithm | O(n) | O(1) | `src/jump-game.ts` |
| 5 | Rod Cutting Problem | Dynamic Programming | O(n²) | O(n) | `src/rod-cutting.ts` |
| 6 | Largest Rectangle in Histogram | Stack-Based Approach | O(n) | O(n) | `src/largest-rectangle.ts` |
| 7 | Maximal Rectangle in Binary Matrix | DP + Histogram | O(m × n) | O(n) | `src/maximal-rectangle.ts` |

---

## Problem Statements

### 1. Flood Fill
Fill a region of an image with a new color using depth-first search. Starting from a given pixel, change all connected pixels of the same original color to the new color.

**Example:**
```
Input:  image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
```

**Key Insight:** Use DFS to explore all connected cells with the original color, replacing them with the new color. The algorithm terminates when it reaches boundaries or cells with different colors.

---

### 2. Trapping Rain Water
Given an elevation map represented by an array of heights, calculate how much water can be trapped after raining. Assume water is trapped between elevations.

**Example:**
```
Input:  height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: 6 units of water can be trapped.
```

**Key Insight:** Use two pointers converging from both ends. Process the side with the smaller maximum height first, as it determines the water level at that position.

---

### 3. Climbing Stairs
You are climbing a staircase with `n` steps. Each time you can climb 1 or 2 steps. How many distinct ways can you climb to the top?

**Example:**
```
Input:  n = 3
Output: 3
Explanation: 1 step + 1 step + 1 step, 1 step + 2 steps, 2 steps + 1 step
```

**Key Insight:** Classic Fibonacci recurrence with dynamic programming. Each step count is the sum of the two preceding counts.

---

### 4. Jump Game
Given an array of integers where each element represents the maximum jump length, determine if you can reach the last index starting from the first index.

**Example:**
```
Input:  nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Input:  nums = [3,2,1,0,4]
Output: false
Explanation: Always reach index 0, cannot proceed further.
```

**Key Insight:** Use a greedy approach tracking the farthest reachable index. If the current index exceeds this maximum reach, the last index is unreachable.

---

### 5. Rod Cutting Problem
Given a rod of length `n` and a price array where `price[i]` is the price for a piece of length `i`, find the maximum profit obtainable by cutting the rod and selling the pieces.

**Example:**
```
Input:  length = 8, price = [0, 1, 5, 8, 9, 10, 17, 17, 20]
Output: 22
Explanation: Cut the rod into pieces of lengths 2+3+3 = 8, with prices 5+8+9 = 22.

Note: price[0] = 0 (no piece, no profit)
      price[1] = 1 (piece of length 1 costs 1)
      price[2] = 5 (piece of length 2 costs 5)
      ...
```

**Key Insight:** Dynamic programming where `dp[i]` represents the maximum profit for a rod of length `i`. For each length, try all possible cuts and keep the best result.

---

### 6. Largest Rectangle in Histogram
Given a histogram represented as an array of heights, find the largest rectangular area that can be formed.

**Example:**
```
Input:  heights = [2,1,5,6,2,3]
Output: 10
Explanation: The largest rectangle is the one with heights [5,6], width = 2, area = 10.
```

**Key Insight:** Use a stack to maintain indices of increasing heights. When a shorter bar is encountered, pop from the stack and calculate the area of the rectangle with the popped bar as the height.

---

### 7. Maximal Rectangle in Binary Matrix
Given a binary matrix (containing 0s and 1s), find the largest rectangular sub-matrix containing only 1s.

**Example:**
```
Input:  matrix = [
  [1,0,1,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1],
  [1,0,0,1,0]
]
Output: 6
Explanation: The largest rectangle is composed of rows 1-2, columns 2-4, forming a 2×3 = 6 area.
```

**Key Insight:** Treat each row as the base of a histogram where heights represent consecutive 1s above. Use the largest rectangle in histogram algorithm for each row.

---

## Installation & Setup

### Prerequisites
- **Node.js** (v14 or higher)
- **npm**, **yarn**, or **pnpm**

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/omran-jo/algorithmic-classics-ts.git
   cd algorithmic-classics-ts
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. **Build the TypeScript code:**
   ```bash
   npm run build
   # or
   pnpm build
   ```

4. **Run the compiled JavaScript:**
   ```bash
   npm start
   # or
   node dist/index.js
   ```

5. **For development with hot-reload:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

### TypeScript Compiler Installation (if not globally available)
```bash
npm install -g typescript
tsc --version
```

---

## File Structure

```
algorithmic-classics-ts/
├── src/
│   ├── index.ts                  # Main entry point (exports all solutions)
│   ├── flood-fill.ts             # Problem 1: Flood Fill
│   ├── trapping-rain-water.ts    # Problem 2: Trapping Rain Water
│   ├── climbing-stairs.ts        # Problem 3: Climbing Stairs
│   ├── jump-game.ts              # Problem 4: Jump Game
│   ├── rod-cutting.ts            # Problem 5: Rod Cutting
│   ├── largest-rectangle.ts      # Problem 6: Largest Rectangle in Histogram
│   └── maximal-rectangle.ts      # Problem 7: Maximal Rectangle in Binary Matrix
├── dist/                         # Compiled JavaScript output
├── package.json
├── tsconfig.json
└── README.md
```

---

## Usage Examples

### Import and Use

```typescript
import {
  floodFill,
  trap,
  climbStairs,
  canJump,
  cutRod,
  largestRectangleArea,
  maximalRectangle
} from './src/index';

// Flood Fill
const image = [[1,1,1],[1,1,0],[1,0,1]];
console.log(floodFill(image, 1, 1, 2));
// Output: [[2,2,2],[2,2,0],[2,0,1]]

// Trapping Rain Water
const heights = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(heights));
// Output: 6

// Climbing Stairs
console.log(climbStairs(5));
// Output: 8

// Jump Game
console.log(canJump([2,3,1,1,4]));
// Output: true

// Rod Cutting
const price = [0, 1, 5, 8, 9, 10, 17, 17, 20];
console.log(cutRod(price, 8));
// Output: 22

// Largest Rectangle in Histogram
const histogram = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(histogram));
// Output: 10

// Maximal Rectangle
const matrix = [
  [1,0,1,0,0],
  [1,0,1,1,1],
  [1,1,1,1,1],
  [1,0,0,1,0]
];
console.log(maximalRectangle(matrix));
// Output: 6
```

---

## Code Quality Features

✅ **Clean Code Principles**
- Consistent indentation and spacing
- Meaningful variable names
- No unnecessary code or redundancies

✅ **Type Safety**
- Strict TypeScript configuration
- Proper function parameter and return type annotations
- Proper handling of array index access with non-null assertions

✅ **Performance Optimization**
- No unnecessary array conversions
- Direct index-based array operations
- Constant space complexity where applicable
- Optimal time complexity algorithms

✅ **Professional Standards**
- Comprehensive JSDoc comments for each algorithm
- Clear problem statements and explanations
- Proper export/import structure

---

## Complexity Analysis

### Time Complexity
| Algorithm | Best | Average | Worst |
|-----------|------|---------|-------|
| Flood Fill | O(m×n) | O(m×n) | O(m×n) |
| Trapping Rain Water | O(n) | O(n) | O(n) |
| Climbing Stairs | O(n) | O(n) | O(n) |
| Jump Game | O(n) | O(n) | O(n) |
| Rod Cutting | O(n²) | O(n²) | O(n²) |
| Largest Rectangle | O(n) | O(n) | O(n) |
| Maximal Rectangle | O(m×n) | O(m×n) | O(m×n) |

### Space Complexity
| Algorithm | Space |
|-----------|-------|
| Flood Fill | O(m×n) - recursive call stack |
| Trapping Rain Water | O(1) - only pointers |
| Climbing Stairs | O(1) - two variables |
| Jump Game | O(1) - single variable |
| Rod Cutting | O(n) - DP array |
| Largest Rectangle | O(n) - stack |
| Maximal Rectangle | O(n) - heights array |


## Testing

Each solution includes commented-out test cases in its source file. To run tests:

```typescript
// Uncomment any test case in the respective .ts file and run:
npm run dev
```

Example from `flood-fill.ts`:
```typescript
// const image = [[1,1,1],[1,1,0],[1,0,1]];
// const result = floodFill(image, 1, 1, 2);
// console.log(result);
```

---

## License

MIT License - See LICENSE file for details

---

## Author

**omran-jo** - [GitHub Profile](https://github.com/omran-jo)

---

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## Acknowledgments

These solutions represent classic algorithmic problems commonly found in:
- Competitive programming (LeetCode, HackerRank, Codeforces)
- Technical interviews for software engineers
- Data structures and algorithms courses

Each solution has been carefully crafted for optimal performance and readability.
