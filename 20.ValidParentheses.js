/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let c = [];
  for (let i=0; i<s.length; i++) {
    if (s[i] == '(') c.push(0);
    if (s[i] == '{') c.push(1);
    if (s[i] == '[') c.push(2);
    if (s[i] == ')') {
        if (c.pop() != 0) return false;
    }
    if (s[i] == '}') {
        if (c.pop() != 1) return false;
    }
    if (s[i] == ']') {
        if (c.pop() != 2) return false;
    }
  }
  if (c.length > 0) return false;
  return true;
};

console.log(isValid("{}"));
console.log(isValid("()[]{}"));
console.log(isValid("("));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
