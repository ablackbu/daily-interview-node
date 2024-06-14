/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  //Two constants for space => o(1) space
  //O(n) + o(52) => O(n) for time


  //only one character can be odd, all others must be even 
  //Is A considered the same or different from a ? 

  //iterate through the list and hydrate our map o(s.length) time  --- o(26 or 52) for space
  const map = {}
  for (const char of s) {
      map[char] = map[char] ? map[char] + 1 : 1
  }

  //iterate through the cache and add to the count o(26 or 52) for time, and o(1) space
  //if any are odd it would be +1
  //Longest would be the sum of all of the character counts Floor(count/2)
  let letterPairs = 0
  let oddOffset = 0
  Object.values(map).forEach(letterCount => {
      if(letterCount%2) {
          oddOffset = 1
      }
      letterPairs += Math.floor(letterCount/2)
  })

  //
  return 2*letterPairs + oddOffset
  

  
};