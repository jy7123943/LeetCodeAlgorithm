/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
  let totalWaitingTime = 0;
  let startTime = customers[0][0];

  customers.forEach(([arrivalTime, preparingTime]) => {
    const preparingDoneTime = Math.max(startTime, arrivalTime) + preparingTime;

    const waitingTime = preparingDoneTime - arrivalTime;
    totalWaitingTime += waitingTime;

    startTime = preparingDoneTime;
  });

  return totalWaitingTime / customers.length;
};
