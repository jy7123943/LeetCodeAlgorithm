/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
  while (students.includes(sandwiches[0])) {
    if (sandwiches[0] === students[0]) {
      students.shift();
      sandwiches.shift();
    } else {
      students.push(students.shift());
    }
  }

  return students.length;
};
