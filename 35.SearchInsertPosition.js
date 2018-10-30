/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let nl = nums.length;
  let i = 0;
  if (target < nums[0]) return(0);
  if (target > nums[nl - 1]) return(nl);
  let ifFound = nums.indexOf(target)
  if (ifFound > -1) return(ifFound);
  for (i=0; i< nums.length; i++){
    if (nums[i] > target) break;
  }
  return(i);
};

console.log(searchInsert([1,3,5,6], 5))
console.log(searchInsert([1,3,5,6], 2))
console.log(searchInsert([1,3,5,6], 7))
console.log(searchInsert([1,3,5,6], 0))
