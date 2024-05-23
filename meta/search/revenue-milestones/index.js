// Add any extra import statements you may need here


// Add any helper functions you may need here


function getBillionUsersDay(growthRates) {
  // Write your code here
  const TARGET = 1000000000 //1B
  
  //Brute force lets walk through each rate and sum it up, when we get there return
  //O (d) where d is the number of days required to get there. 
  
  //More optimal, we could user a binary search and jump to find our bounds 
  //first bounds will be 0 and 10 - arbitrary
  //adjust the bounds based on whether we are lower or upper (bin search style)
  //If we need to go larger lets set upper bound to upperBound^2
  //This should be log n for the search once we are within range and some small constant before to "find" the range with some guessing  
  
  let lowerBound = 0
  let upperBound = 10
  let lockUpper = false
  while(true) {
    const mid = lowerBound + Math.floor((upperBound - lowerBound)/2)
    const currentAppUsers = growthRates.map((rate) => rate ** mid) //Could condense this into a single reduce function
    const currentTotal = currentAppUsers.reduce((acc, curr) => acc + curr, 0) //n makes this a big int
    console.log(`${lowerBound} -- ${mid} -- ${upperBound} -> ${currentTotal}`)

    
    if(TARGET > currentTotal) { //We need to go up
      if(!lockUpper) { // We don't want to dynamically move larger once we found the max bound
        upperBound = upperBound*2 //Double instead of exponential to keep the numbers under control - if more size is needed a large number lib could be added
      }
      lowerBound = mid + 1
    } else if (TARGET < currentTotal) { //We need to go down or finish
      lockUpper = true
      if(upperBound - lowerBound === 1) {
        //End of the line, gotta get off this train
        return mid
      }
      upperBound = mid      
    } else { //Exact hit, highly unlikely
       return mid
    }
  }
  
}











// These are the tests we use to determine if the solution is correct.
// You can add your own at the bottom.
function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var test_1 = [1.1, 1.2, 1.3];
var expected_1 = 79;
var output_1 = getBillionUsersDay(test_1);
check(expected_1, output_1);

var test_2 = [1.01, 1.02];
var expected_2 = 1047;
var output_2 = getBillionUsersDay(test_2);
check(expected_2, output_2);

// Add your own test cases here
