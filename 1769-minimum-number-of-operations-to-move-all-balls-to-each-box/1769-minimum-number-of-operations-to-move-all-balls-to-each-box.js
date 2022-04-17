/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxStr) {
  const boxes = boxStr.split('');
  const ballPositions = boxes.reduce((acc, item, position) => {
    if (item === '1') acc.push(position);
    return acc;
  }, []);

  return boxes.map((_, boxIdx) => (
    ballPositions.reduce((count, position) => count + Math.abs(position - boxIdx), 0)
  ));
};
