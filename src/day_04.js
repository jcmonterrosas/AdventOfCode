import md5 from 'md5';

/**
 * Contains solutions for Day 4
 * Puzzle Description: https://adventofcode.com/2015/day/4
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
  let number = 0;
  while (true) {
    const hash = md5(input + number);
    if (hash.startsWith('00000')) {
      return number;
    }
    number++;
  }
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
  let number = 0;
  while (true) {
    const hash = md5(input + number);
    if (hash.startsWith('000000')) {
      return number;
    }
    number++;
  }
};
