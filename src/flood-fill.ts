export function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
  const originalColor = image[sr]?.[sc];
  if (originalColor === undefined || originalColor === newColor) {
    return image;
  }

  function dfs(row: number, col: number): void {
    if (
      row < 0 ||
      row >= image.length ||
      col < 0 ||
      col >= (image[row]?.length ?? 0) ||
      image[row]?.[col] !== originalColor
    ) {
      return;
    }

    image[row]![col] = newColor;
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  dfs(sr, sc);
  return image;
}

// Example usage:
// const image = [
//   [1, 1, 1],
//   [1, 1, 0],
//   [1, 0, 1]
// ];
// const result = floodFill(image, 1, 1, 2);
// console.log(result);
