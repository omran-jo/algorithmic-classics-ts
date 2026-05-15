# Algorithmic Classics: TypeScript Solutions

A professional collection of TypeScript solutions for 7 classic algorithmic problems. Each solution is optimized for clarity, efficiency, and correctness.

## 📋 Problems Summary

| # | Problem | Algorithm | Time | Space | File |
|---|---------|-----------|------|-------|------|
| 1 | Flood Fill | DFS | O(m×n) | O(m×n) | `src/flood-fill.ts` |
| 2 | Trapping Rain Water | Two-Pointer | O(n) | O(1) | `src/trapping-rain-water.ts` |
| 3 | Climbing Stairs | DP | O(n) | O(1) | `src/climbing-stairs.ts` |
| 4 | Jump Game | Greedy | O(n) | O(1) | `src/jump-game.ts` |
| 5 | Rod Cutting | DP | O(n²) | O(n) | `src/rod-cutting.ts` |
| 6 | Largest Rectangle | Stack | O(n) | O(n) | `src/largest-rectangle.ts` |
| 7 | Maximal Rectangle | DP+Histogram | O(m×n) | O(n) | `src/maximal-rectangle.ts` |

## Installation

```bash
git clone https://github.com/omran-jo/algorithmic-classics-ts.git
cd algorithmic-classics-ts
npm install
npm run build
```

## Usage

```typescript
import { floodFill, trap, climbStairs, canJump, cutRod, largestRectangleArea, maximalRectangle } from './src/index';

console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2));
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
console.log(climbStairs(5)); // 8
console.log(canJump([2,3,1,1,4])); // true
```

## Code Quality

✅ Type-safe TypeScript with strict mode
✅ Optimal time and space complexity
✅ Clean, minimal code with intelligent comments
✅ Comprehensive documentation
✅ Production-ready standards

## License

MIT License