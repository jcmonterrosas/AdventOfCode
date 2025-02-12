/**
 * Contains solutions for Day 1
 * Puzzle Description: https://adventofcode.com/2015/day/1
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
  // ( -> up
  // ) -> down
  let floor = 0;
  for (let i = 0; i < input.length; i++) {
    floor = input[i] === '(' ? floor + 1 : floor - 1;   
  }  
  
  return floor;
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
  let floor = 0;
  let i = 0;
  for (i; i < input.length; i++) {
    floor = input[i] === '(' ? floor + 1 : floor - 1;
    if (floor < 0) {
      break;
    }
  }  

  return i+1;
};
