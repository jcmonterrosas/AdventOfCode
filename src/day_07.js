/**
 * Contains solutions for Day 7
 * Puzzle Description: https://adventofcode.com/2015/day/7
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
  //   "123 -> x",
  //   "456 -> y",
  //   "x AND y -> d",
  //   "x OR y -> e",
  //   "x LSHIFT 2 -> f",
  //   "y RSHIFT 2 -> g",
  //   "NOT x -> h",
  //   "NOT y -> i",
  //   "x -> j",
  //   "f OR g -> h",
  //   "h AND i -> j",
  // ];
  let wires = new Map(); 
  let instructions = new Map();

  for (const string of lines) {
    let [source, destination] = string.split(" -> ");
    instructions.set(destination, source);
  }

  function calculateWire(wire) {
    if (wires.has(wire)) {
      return wires.get(wire);
    }
  
    let instruction = instructions.get(wire);
    let source = instruction.split(" ");
    
    if (source.length === 1) {
      if (isNaN(+source[0])) {
        wires.set(wire, calculateWire(source[0]));
      } else {
        wires.set(wire, +source[0]);
      }
    } else if (source[0] === "NOT") {
      const wire1 = calculateWire(source[1]);
      wires.set(wire, ~wire1 & 0xffff);
    } else {
      const [wire1, operator, wire2] = source;
      const leftValue = isNaN(+wire1) ? calculateWire(wire1) : +wire1;
      const rightValue = isNaN(+wire2) ? calculateWire(wire2) : +wire2;

      switch (operator) {
        case "AND":
          wires.set(wire, leftValue & rightValue);
          break;
        case "OR":
          wires.set(wire, leftValue | rightValue);
          break;
        case "LSHIFT":
          wires.set(wire, leftValue << rightValue);
          break;
        case "RSHIFT":
          wires.set(wire, leftValue >> rightValue);
          break;
      }
    }

    return wires.get(wire);
  }

  return calculateWire('a');
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
  let wires = new Map();
  let instructions = new Map();

  for (const string of lines) {
    let [source, destination] = string.split(" -> ");
    instructions.set(destination, source);
  }

  function calculateWire(wire) {
    if (wires.has(wire)) {
      return wires.get(wire);
    }

    let instruction = instructions.get(wire);
    let source = instruction.split(" ");

    if (source.length === 1) {
      if (isNaN(+source[0])) {
        wires.set(wire, calculateWire(source[0]));
      } else {
        wires.set(wire, +source[0]);
      }
    } else if (source[0] === "NOT") {
      const wire1 = calculateWire(source[1]);
      wires.set(wire, ~wire1 & 0xffff);
    } else {
      const [wire1, operator, wire2] = source;
      const leftValue = isNaN(+wire1) ? calculateWire(wire1) : +wire1;
      const rightValue = isNaN(+wire2) ? calculateWire(wire2) : +wire2;

      switch (operator) {
        case "AND":
          wires.set(wire, leftValue & rightValue);
          break;
        case "OR":
          wires.set(wire, leftValue | rightValue);
          break;
        case "LSHIFT":
          wires.set(wire, leftValue << rightValue);
          break;
        case "RSHIFT":
          wires.set(wire, leftValue >> rightValue);
          break;
      }
    }

    return wires.get(wire);
  }

  instructions.set('b', calculateWire('a').toString());
  wires.clear();
  return calculateWire('a');
};
