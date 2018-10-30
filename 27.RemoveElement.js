/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let index = nums.indexOf(val);
  while (index > -1) {
    nums.splice(index, 1);
    index = nums.indexOf(val);
  }
  return(nums.length)
};

//let nums = [3,2,2,3], val = 3;
let nums = [0,1,2,2,3,0,4,2], val = 2;

// nums is passed in by reference. (i.e., without making a copy)
var len = removeElement(nums, val);
console.log("Length = " + len);
// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (let i = 0; i < len; i++) {
  console.log(nums[i]);
}
