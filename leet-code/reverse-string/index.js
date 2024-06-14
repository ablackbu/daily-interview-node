/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  //o(1) means no recursion since thats extra call stack space
  let left = 0
  let right = s.length-1
  while(left<right) {
      const temp = s[left]
      s[left] = s[right]
      s[right] = temp
      left++
      right--
  }
  return s
};