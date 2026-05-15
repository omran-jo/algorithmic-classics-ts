function cutRod(price: number[], length: number): number {
  if (length <= 0) {
    return 0;
  }

  const dp = new Array(length + 1).fill(0);

  for (let i = 1; i <= length; i++) {
    let maxProfit = 0;
    for (let j = 1; j <= i; j++) {
      const currentProfit = price[j]! + dp[i - j]!;
      maxProfit = Math.max(maxProfit, currentProfit);
    }
    dp[i] = maxProfit;
  }

  return dp[length]!;
}
  
export { cutRod };

// Example usage:
//const price = [0, 1, 5, 8, 9, 10, 17, 17, 20];
//const result = cutRod(price, 8);
//console.log(result);
