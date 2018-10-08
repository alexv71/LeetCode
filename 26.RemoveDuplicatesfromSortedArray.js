/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] == nums[i-1]) nums.splice(i--, 1);
  }

  return nums.length
};


nums = [1,1,2]
console.log(removeDuplicates(nums));
console.log(nums);

nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));
console.log(nums);
