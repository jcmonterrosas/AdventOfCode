/**
 * Contains solutions for Day 8
 * Puzzle Description: https://adventofcode.com/2015/day/8
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
  // \\ represents a single backslash character
  // \" represents a single double-quote character
  // \x plus two hexadecimal characters represents a single character with that ASCII code
  // let total = 0;
  // lines = ['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'];
  let stringLiteral = 0;
  let charsInMemory = 0;

  for (const string of lines) {
    stringLiteral += string.length;
    charsInMemory += string.length - 2;
    for (let i = 1; i < string.length - 1; i++) {   
      if (string[i] === '\\') {
        if (string[i + 1] === '\\' || string[i + 1] === '"') {
          charsInMemory--;
          i++;
        } else if (string[i + 1] === 'x') {
          charsInMemory -= 3;
          i += 3;
        }
      }
    }
  }

  return stringLiteral - charsInMemory;
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
  // lines = ['""', '"abc"', '"aaa\\"aaa"', '"\\x27"'];
  let stringLiteral = 0;
  let encodedString = 0;

  for (const string of lines) {
    stringLiteral += string.length;
    encodedString += string.length + 4;
    for (let i = 1; i < string.length - 1; i++) {
      if (string[i] === '\\') {
        if (string[i + 1] === '\\' || string[i + 1] === '"') {
          encodedString += 2;
          i++;
        } else if (string[i + 1] === 'x') {
          encodedString++;
          i += 3;
        }
      }
    }  
  }

  return encodedString - stringLiteral;
};
