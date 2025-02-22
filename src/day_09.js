/**
 * Contains solutions for Day 9
 * Puzzle Description: https://adventofcode.com/2015/day/9
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
  // lines = [
  //   "London to Dublin = 464",
  //   "London to Belfast = 518",
  //   "Dublin to Belfast = 141",
  // ];

  let distances = new Map();
  for (const string of lines) {
    const [cities, distance] = string.split(" = ");
    const [city1, city2] = cities.split(" to ");

    distances.set(city1, { ...distances.get(city1), [city2]: +distance });
    distances.set(city2, { ...distances.get(city2), [city1]: +distance });
  }

  let cities = [...distances.keys()];
  let permutations = new Set();

  function permute(arr, m = []) {
    if (arr.length === 0) {
      permutations.add(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let current = [...arr];
        let next = current.splice(i, 1);
        permute(current.slice(), m.concat(next));
      }
    }
  }

  permute(cities);

  let shortestDistance = Infinity;
  for (const perm of permutations) {
    let distance = 0;
    for (let i = 0; i < perm.length - 1; i++) {
      distance += distances.get(perm[i])[perm[i + 1]];
    }
    shortestDistance = Math.min(shortestDistance, distance);
  }

  return shortestDistance;
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

  let distances = new Map();
  for (const string of lines) {
    const [cities, distance] = string.split(" = ");
    const [city1, city2] = cities.split(" to ");

    distances.set(city1, { ...distances.get(city1), [city2]: +distance });
    distances.set(city2, { ...distances.get(city2), [city1]: +distance });
  }

  let cities = [...distances.keys()];
  let permutations = new Set();

  function permute(arr, m = []) {
    if (arr.length === 0) {
      permutations.add(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let current = [...arr];
        let next = current.splice(i, 1);
        permute(current.slice(), m.concat(next));
      }
    }
  }

  permute(cities);

  let longestDistance = -Infinity;
  for (const perm of permutations) {
    let distance = 0;
    for (let i = 0; i < perm.length - 1; i++) {
      distance += distances.get(perm[i])[perm[i + 1]];
    }
    longestDistance = Math.max(longestDistance, distance);
  }

  return longestDistance;
};
