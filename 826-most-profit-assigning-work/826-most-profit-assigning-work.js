/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
  worker.sort((l, r) => l - r);

  const jobs = difficulty
    .map((d, i) => ({ d, p: profit[i] }))
    .sort((l, r) => l.d - r.d)
    .reduce((list, job, i) => {
      if (i === 0 || list[list.length - 1].p < job.p) {
        list.push(job);
      }
      return list;
    }, []);


  let totalProfit = 0;
  let workerIndex = 0;
  let jobIndex = 0;

  while (workerIndex < worker.length) {
    if (!jobs[jobIndex]) break;
    
    const ability = worker[workerIndex];

    if (ability < jobs[jobIndex].d) {
      workerIndex++;
      continue;
    }

    if (jobs[jobIndex + 1] && ability >= jobs[jobIndex + 1].d) {
      jobIndex++;
      continue;
    }

    totalProfit += jobs[jobIndex].p;
    workerIndex++;
  }

  return totalProfit;
};
