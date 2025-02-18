/**
 * Contains solutions for Day 6
 * Puzzle Description: https://adventofcode.com/2015/day/6
 */

/**
 * Returns the solution for level one of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */

function handleSetUp(start, end, grid, instruction) {
  let [x1, y1] = start.split(",").map(Number);
  let [x2, y2] = end.split(",").map(Number);

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      switch (instruction) {
        case "toggle":
          grid.set(`${i},${j}`, !grid.get(`${i},${j}`));
          break;
        case "off":
          grid.set(`${i},${j}`, false);
          break;
        case "on":
          grid.set(`${i},${j}`, true);
          break;
      }
    }
  }

  return grid;
};

export const levelOne = ({ input, lines }) => {
  // your code here
  // grid 1000x1000 -> 0,0, 0,999, 999,999, 999,0
  // turn on, turn off, or toggle various given as coordinate pairs(opposite corners of a rectangle)
  // lines = [
  //   "turn on 0,0 through 999,999",
  //   "toggle 0,0 through 999,0",
  //   "turn off 499,499 through 500,500",
  // ];

  let lightsLit = 0;
  let grid = new Map();

  for (const string of lines) {
    if (string.includes("toggle")) {
      const [, start, , end] = string.split(" ");
      grid = handleSetUp(start, end, grid, "toggle");
    } else if (string.includes("off")) {
      const [, , start, , end] = string.split(" ");
      grid = handleSetUp(start, end, grid, "off");
    } else {
      const [, , start, , end] = string.split(" ");
      grid = handleSetUp(start, end, grid, "on");
    }
  }

  lightsLit = [...grid.values()].filter(Boolean).length;

  return lightsLit;
};

/**
 * Returns the solution for level two of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */

function handleBrightness(start, end, grid, instruction) {
  let [x1, y1] = start.split(',').map(Number);
  let [x2, y2] = end.split(',').map(Number);

  for (let i = x1; i <= x2; i++) {
    for (let j = y1; j <= y2; j++) {
      const key = `${i},${j}`;
      switch (instruction) {
        case "toggle":
          grid.set(key, (grid.get(key) || 0) + 2);
          break;
        case "off":
          grid.set(key, Math.max(0, (grid.get(key) || 0) - 1));
          break;
        case "on":
          grid.set(key, (grid.get(key) || 0) + 1);
          break;
      }
    }
  }

  return grid;
};

export const levelTwo = ({ input, lines }) => {
  // your code here
  // lines = ["turn on 0,0 through 0,0", "toggle 0,0 through 999,999"];
  let grid = new Map();

  for (const string of lines) {
    if (string.includes("toggle")) {
      const [, start, , end] = string.split(" ");
      grid = handleBrightness(start, end, grid, "toggle");
    } else if (string.includes("off")) {
      const [, , start, , end] = string.split(" ");
      grid = handleBrightness(start, end, grid, "off");
    } else if (string.includes("on")) {
      const [, , start, , end] = string.split(" ");
      grid = handleBrightness(start, end, grid, "on");
    }
  }

  const totalBrightness = [...grid.values()].reduce((acc, curr) => acc + curr, 0);

  return totalBrightness;
};
