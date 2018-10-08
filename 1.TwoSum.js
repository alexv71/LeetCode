/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var res = Array();
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        res[0] = i;
        res[1] = j
        return res;
      }
    }
  }
  console.log("No two sum solution");
};

//const nums = [2, 7, 11, 15];
//const target = 9;

const nums = [3,2];
const target = 6;

console.log(twoSum(nums, target));
