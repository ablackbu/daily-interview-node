/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {

  nums.sort((a, b) => a - b)
  
  let moves = 0
  let prev = nums[0]
  for(let i = 1; i < nums.length; ++i) { //O(n)
      if(nums[i] <= prev) {
          const jumpSize = prev - nums[i] + 1
          moves += jumpSize
          nums[i] += jumpSize //This allows us to track if we bumpped the previous one 
          //In order to handle multiple of the same number over and over ex 2,2,2,2,2 we need to bump curr
      }
      prev = nums[i]
  }
  
  
  return moves
};

/**
* @param {number[]} nums
* @return {number}
*/
var minIncrementForUniqueBruteForce = function(nums) {

  const numSet = new Set()
  let moves = 0
  let currIndex = 0
  while(numSet.size < nums.length) { //O(n * m) Where N is the length and m is the number of moves required o(n) space 
      if(numSet.has(nums[currIndex])) {
          nums[currIndex] += 1
          moves++
      } else {
          numSet.add(nums[currIndex]) 
          currIndex++
      }
  }
  return moves
};