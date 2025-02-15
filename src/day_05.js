/**
 * Contains solutions for Day 5
 * Puzzle Description: https://adventofcode.com/2015/day/5
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
  // Nice string => 3+ vowels, at least one letter that appears twice in a row, and none of the strings ab, cd, pq, or xy
  // lines = ["ugknbfddgicrmopn", "aaa", "jchzalrnumimnmhp", "haegwjzuvuyypxyu", "dvszwmarrgswjxmb"];
  let niceStrings = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let disallowedStrings = ["ab", "cd", "pq", "xy"];

  for (const string of lines) {
    let vowelsCount = 0;
    let hasDoubleLetter = false;
    let hasDisallowedString = false;

    for (const char of string) {
      if (vowels.includes(char)) {
        vowelsCount++;
      }
    }

    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === string[i + 1]) {
        hasDoubleLetter = true;
        break;
      }
    }

    for (const disallowed of disallowedStrings) {
      if (string.includes(disallowed)) {
        hasDisallowedString = true;
        break;
      }
    }

    if (vowelsCount >= 3 && hasDoubleLetter && !hasDisallowedString) {
      niceStrings++;
    }
  }

  return niceStrings;
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
  // lines = ["qjhvhtzxzqqjkmpb", "xxyxx", "uurcxstgmygtbstg", "ieodomkazucvgmuy"];
  let niceStrings = 0;

  for (const string of lines) {
    let hasDoubleLetterPair = false;
    let hasRepeatLetter = false;

    for (let i = 0; i < string.length - 2; i++) {
      let pair = string[i] + string[i + 1];

      if (string.substring(i + 2).includes(pair)) {
        hasDoubleLetterPair = true;
      }

      if (string[i] === string[i + 2]) {
        hasRepeatLetter = true;
      }
    }
    if (hasDoubleLetterPair && hasRepeatLetter) {
      niceStrings++;
    }
  }
  return niceStrings;
};
