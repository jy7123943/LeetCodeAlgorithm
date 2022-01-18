/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let [five, ten, twenty] = [0, 0, 0];

  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) five++;
    if (bills[i] === 10) ten++;
    if (bills[i] === 20) twenty++;

    let change = bills[i] - 5;
    while (change > 0) {
      if (change >= 20 && twenty) {
        change -= 20;
        twenty--;
        continue;
      }
      if (change >= 10 && ten) {
        change -= 10;
        ten--;
        continue;
      }
      if (change >= 5) {
        if (five) {
          change -= 5;
           five--;
          continue;
        }
        return false;
      }
    }
    if (i === bills.length - 1 && change !== 0) return false;
  }

  return true;
};
