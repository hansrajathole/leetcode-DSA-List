/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  let n = cardPoints.length;
  let i = 0 
  let max = 0 , sum = 0

  for( i ; i<k ; i++){
    sum += cardPoints[i]
  }
  console.log(sum)
 max = Math.max(sum , max)
 console.log(max)
   max = sum;
  let left = k - 1;
  let right = n - 1;

  // Swap one from front with one from back
  while (left >= 0) {
    sum = sum - cardPoints[left] + cardPoints[right];
    max = Math.max(max, sum);
    left--;
    right--;
  }

  return max;
};