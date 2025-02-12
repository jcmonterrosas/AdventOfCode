/**
 * Contains solutions for Day 2
 * Puzzle Description: https://adventofcode.com/2015/day/2
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
  // box area -> 2*l*w + 2*w*h + 2*h*l  
  let area = 0;
  lines.forEach(element => {
    const [l,w,h] = element.split('x');
    const side1 = l*w;
    const side2 = w*h;
    const side3 = h*l;

    area += 2 * (side1 + side2 + side3) + Math.min(side1,side2,side3);     
  });
  
  return area;
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
  let ribbon = 0;
  lines.forEach(element => {
    const sides = element.split('x').map(s => +s);
    sides.sort((a,b) => a - b);

    ribbon += 2 * (sides[0] + sides[1]) + sides.reduce((acc, val) => acc * val, 1);
  });

  return ribbon;
};
