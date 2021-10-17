/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  let count = 0;

  while (students.length) {
    if (sandwiches[0] === students[0]) {
      students.shift();
      sandwiches.shift();
      count = 0;
    } else {
      students.push(students.shift());

      if (count > students.length) break;

      count++;
    }
  }

  return students.length;
};
