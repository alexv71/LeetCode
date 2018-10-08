/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  var normalNum = +String(Math.abs(x));
  var reverseNum = +String(Math.abs(x)).split('').reverse().join('');
  if (x >= 0 && normalNum == reverseNum) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(0));
console.log(isPalindrome(5));
console.log(isPalindrome(100));
//console.log(isPalindrome(12521));
//console.log(isPalindrome(-121));
//console.log(isPalindrome(1421));
