/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var rev = 0;
  var sign_x = 1;
  if (x<0) sign_x = -1;
  x = Math.abs(x);
  while (x != 0) {
      var pop = x % 10;
      x = Math.floor(x/10);
      rev = rev * 10 + pop;
      if (sign_x > 0 && rev > 2**31 - 1) return 0;
      if (sign_x < 0 && rev > 2**31) return 0;
  }
  return rev * sign_x;
};

console.log(reverse(12635));
console.log(reverse(-123));
console.log(reverse(1200));

console.log(2**31-1);
