/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let i = 0;
  let not_done = true;

  if (strs.length == 0){
    return "";
  }
  if (strs.length == 1){
    return strs[0];
  }

  do {
    for (let j=0; j<strs.length - 1; j++) {
      if(strs[j].substring(i,i+1).length == 0 || strs[j].substring(i,i+1) != strs[j+1].substring(i,i+1)) {
        not_done = false;
      }
    }
    i++;
  }
  while(not_done);

  let res = strs[0].substring(0,i-1);
  return res;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
