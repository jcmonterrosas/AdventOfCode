/**
 * Contains solutions for Day 3
 * Puzzle Description: https://adventofcode.com/2015/day/3
 */

/**
 * Returns the solution for level one of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */
export const levelOne = ({ input, lines }) => {
  // your code here
  let grid = new Map();
  let x = 0, y = 0;
  grid.set(`${x},${y}`, 1);

  for (const dir of input) {
    switch (dir) {
      case '^':
        y++;
        break;
      case 'v':
        y--;
        break;
      case '>':
        x++;
        break;
      case '<':
        x--;
        break;
    }
    const key = `${x},${y}`;
    grid.set(key, (grid.get(key) || 0) + 1);    
  }

  return grid.size;
};

/**
 * Returns the solution for level two of this puzzle.
 * @param {Object} args - Provides both raw and split input.
 * @param {String} args.input - The original, unparsed input string.
 * @param {String[]} args.lines - Array containing each line of the input string.
 * @returns {Number|String}
 */
export const levelTwo = ({ input, lines }) => {
  // your code here
  let grid = new Map();
  let santaX = 0, santaY = 0, robotX = 0, robotY = 0;
  grid.set(`${santaX},${santaY}`, 2);

  for (let i = 0; i < input.length; i++) {      
    if (i % 2 === 0) {
      switch (input[i]) {
        case '^':
          santaY++;
          break;
        case 'v':
          santaY--;
          break;
        case '>':
          santaX++;
          break;
        case '<':
          santaX--;
          break;
      }
      const key = `${santaX},${santaY}`; 
      grid.set(key, (grid.get(key) || 0) + 1); 
    }else {
      switch (input[i]) {
        case '^':
          robotY++;
          break;
        case 'v':
          robotY--;
          break;
        case '>':
          robotX++;
          break;
        case '<':
          robotX--;
          break;
      }
      let key = `${robotX},${robotY}`; 
      grid.set(key, (grid.get(key) || 0) + 1); 
    }
  }
  
  return grid.size;
};
