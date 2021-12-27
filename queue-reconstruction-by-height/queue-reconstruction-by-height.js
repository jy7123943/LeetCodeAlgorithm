/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
  const result = [];

  people.sort((l, r) => l[0] === r[0] ? l[1] - r[1] : r[0] - l[0]);

  while (people.length) {
    const longest = people.shift();

    result.splice(longest[1], 0, longest);
  }
  return result;
};
