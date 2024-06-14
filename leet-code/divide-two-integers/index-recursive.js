/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const numerator = dividend < 0 ? swapSign(dividend) : dividend
  const denominator = divisor < 0 ? swapSign(divisor) : divisor
  //Only need to swap if they don't share the same signage
  const mustSwap = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)
  const result = dividePositive(numerator, denominator)
  const signed = mustSwap ? swapSign(result) : result
  return to32BitRange(signed) 
};

var dividePositive = function (numerator, denominator) {

  //This is a worst case and there is nothing to do here
  if(denominator === 1) {
      return numerator
  }

  //Hitting call stack size issues, need to make this iterative
  let num = numerator
  let ans = 0
  while(numerator > denominator ) {

  }


  return 1 + dividePositive(numerator-denominator, denominator)
}

var swapSign = function (n) { //Normally I'd just * -1 to sign swap but theis problem says no multiplcation
  if(n === 2147483648) { //This logic fails when we are at the upper bound since there isn't another bit to shift and make negative.
      return ~(n-1)
  }
  //Logic seems to work for the others
  return ~n + 1
}

var to32BitRange = function (number) {
  const MAX_INT = 2147483647
  const MIN_INT = -2147483648
  if(number > MAX_INT) {
      return MAX_INT
  }
  if(number < MIN_INT) {
      return MIN_INT
  }
  return number
}