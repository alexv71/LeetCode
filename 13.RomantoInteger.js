/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0;
  for (let i=0; i<s.length; i++) {
    switch(s.substring(i, i+2)) {
      case "CM": res += 900; i++; break;
      case "CD": res += 400; i++; break;
      case "XC": res += 90; i++; break;
      case "XL": res += 40; i++; break;
      case "IX": res += 9; i++; break;
      case "IV": res += 4; i++; break;
      default:
        switch(s.substring(i, i+1)) {
          case "M": res += 1000; break;
          case "D": res += 500; break;
          case "C": res += 100; break;
          case "L": res += 50; break;
          case "X": res += 10; break;
          case "V": res += 5; break;
          case "I": res += 1;
        }
    }
  }
  return res;
};

console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("VIII"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("IX"));
console.log(romanToInt("III"));
